import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'ng-app-child',
  imports: [
    // AsyncPipe
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  public currentValue$ = interval(1000);

  public currentSignal = signal(0);

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}
  
  ngOnInit(): void {
    setTimeout(() => {
      this.currentSignal.set(1);
      this.cdr.detectChanges();
    }, 1000)
    
  }
}
