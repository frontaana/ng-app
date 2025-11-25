import { Component, OnDestroy, OnInit } from '@angular/core';

import { routePaths } from '../../interfaces/enums';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, catchError, combineLatest, debounceTime, distinctUntilChanged, forkJoin, from, map, Observable, of, ReplaySubject, startWith, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { ChildComponent } from './child/child.component';

interface Good {
  id: number;
  name: string;
}

type GoodsResponse = Good[];

@Component({
    selector: 'ng-app-consultations',
    imports: [
        MatListModule,
        RouterLink,
        CommonModule,
        ChildComponent
    ],
    templateUrl: './consultations.component.html',
    styleUrl: './consultations.component.scss',

})
export class ConsultationsComponent implements OnInit, OnDestroy {
  list = [
    {
      title: 'форма',
      link: `./${routePaths.form}`,
      isActive: false
    }
  ]

  animals = ['Кошка', 'Собака', 'Хомяк', 'Попугай', 'Черепаха'];
  ages = ['1 год', '2 года', '3 года', '4 года', '5 лет'];
  surnames = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов'];

  form: FormGroup;

  filteredAnimals: string[] = [];
  filteredAges: string[] = [];
  filteredSurnames: string[] = [];

  observable1 = of([]);

  subject1 = new Subject<number>();
  subject2 = new BehaviorSubject(true);
  subject3 = new ReplaySubject(3);
  subject4 = new AsyncSubject();

  subject1observable: Observable<number>;

  subject1observableView: number;

  onDestroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      animal: ['', Validators.required, [this.asyncValidator('animal')]],
      age: ['', Validators.required, [this.asyncValidator('age')]],
      surname: ['', Validators.required, [this.asyncValidator('surname')]],
    })

    this.subject1observable = this.subject1.asObservable();

    this.subject1observable.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(res => this.subject1observableView = res);

    this.load();

    this.addLog('3');
    this.addLog('4');
    this.addLog('5');
    this.addLog('6');
    this.addLog('7');
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  private asyncValidator(field: string): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) return of(null);

      return of(control.value.pipe(
        switchMap((res: string) => {
          if (['Текст Ошибки'].includes(res)) {
            return of ({ invalidValue: `Значение ${field} запрещено`})
          }
          
          return of(null);
        })
      ))
    };
  }

  public incrementSubjValue(): void {
    this.subject1observable.pipe(
      switchMap(() => of(9))
    );
  }

  public incrementObservValue7(): void {
    this.subject1.next(7);
  }

  public incrementObservValue9(): void {
    this.subject1.next(9);
  }

  private dataBS = new BehaviorSubject<string>('');
  data$ = this.dataBS.asObservable();

  public load(): void {
    from(['cat', 'dog', 'mouse']).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(res => this.dataBS.next(res));
  }

  public trackByWord = (i: number, word: string) => word;

  public logListRS$ = new ReplaySubject(2);
  public logListO$ = this.logListRS$.asObservable();


  public onInput(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.addLog(element.value);
  }

  public addLog(message: string): void {
    this.logListRS$.next(message);
  }

  public onClick(): void {
    this.logListRS$.next('1');
  }

public allGoods = [
  { id: 1, name: 'IPhone' },
  { id: 2, name: 'seeds' },
  { id: 3, name: 'bread' }
];

public topGoods = [
  { id: 2, name: 'seeds' },
];

public all = new Promise<GoodsResponse>(resolve => resolve(this.allGoods));
public top = new Promise<GoodsResponse>(resolve => resolve(this.topGoods));

// [
//   { id: 2, name: 'seeds' },  // top
//   { id: 1, name: 'IPhone' }, // all (без дублей)
//   { id: 3, name: 'bread' }
// ]

// ✔ два API в параллели
// ✔ сначала top → потом all
// ✔ без дублирования
// ✔ устойчивость, если одно API упало 

// forkJoin - эмитит один раз
// switchMap - поиск, фильтр - возможность прервать предыдущий поток, переключиться на новый

// combineLatest - получать обновления - живые потоки - каждый дал хотя бы 1 значение
// concatMap - четко следовать последовательности - шаги процесса
// mergeMap - массовое получение значений
// exhaustMap - игнорирует новый запрос до завершения - сабмит формы

private load$ = new BehaviorSubject<void>(undefined);

public loadd(): void {
  console.log('loadd')
  this.load$.next();
}

public goods$: Observable<Good[]> = this.load$.pipe(
  switchMap(() => this.loadGoods()),
  startWith([])
);

private loadGoods(): Observable<Good[]> {
  const top$: Observable<GoodsResponse> = from(this.top).pipe(
    catchError(() => of([]))
  );

  const all$: Observable<GoodsResponse> = from(this.all).pipe(
    catchError(() => of([]))
  );

  return forkJoin({
    all: all$,
    top: top$
  }).pipe(
    map(({ top, all }) => {
      const topIds = new Set(top.map(el => el.id));
      return [...top, ...all.filter(el => !topIds.has(el.id))];
    })
  )
}

private search$ = new BehaviorSubject<string>('');

public searchGood(value: string) {
  this.search$.next(value);
}

public filteredGoods$: Observable<Good[]> = combineLatest([
  this.goods$,
  this.search$.pipe(
    debounceTime(300),
    distinctUntilChanged()
  )
]).pipe(
  map(([goods, search]) => {
    const query = search.toLocaleLowerCase().trim();
    return goods.filter(item => item.name.toLocaleLowerCase().includes(query))
  })
);




}
