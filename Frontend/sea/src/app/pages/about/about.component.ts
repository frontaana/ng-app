import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeavyTaskWorkerService } from '../../services/heavy-task-worker.service';
import { delay, from, map, of } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  // title = from([1,2,3]);
  title = `Cutiest`;

  public containers = [
    {
      title: '1',
      childs: [
        {
          title: '1.1',
        },
        {
          title: '1.2',
        },
      ],
    },
    {
      title: '2',
      childs: [
        {
          title: '2.1',
        },
        {
          title: '2.2',
          childs: [
            {
              title: '2.2.1',
            },
            {
              title: '2.2.2',
            },
          ],
        },
      ],
    },
  ];

  getTitle(nodeName: string): string {
    return `Отдел ${nodeName}`;
  }



  // workerValue = 999999;
  // result: number | null = null;

  // constructor(private heavyTaskWorkerService: HeavyTaskWorkerService) {}

  // public runWorker() {
  //   this.result = null;

  //   this.heavyTaskWorkerService.run(this.workerValue).subscribe({
  //     next: (res) => {
  //       console.log('Результат из воркера:', res);
  //       this.result = res;
  //     },
  //     error: (err) => console.error('Ошибка воркера:', err),
  //   });
  // }

  ngOnInit() {
    // this.title.pipe(
    //   delay(10000),
    // ).subscribe(value => console.log('Cutiest', value));
  }

}
