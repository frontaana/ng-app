import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeavyTaskWorkerService } from '../../services/heavy-task-worker.service';
import { delay, from, map, of } from 'rxjs';

@Component({
  selector: 'asea-about',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  public title = `Cutiest`;

  notes = [
    'Что сложного? (а)',
    'Senior frontend developer',
    'Тренер по фридайвингу',
    'Мужчина-опора, щедрый',
    'Сон вовремя',
    'Питание чистое',
    'АПП без сладкого',
    'Ресурсная',
    'Отлетевшая',
  ]

  ngOnInit() {
    // this.title.pipe(
    //   delay(10000),
    // ).subscribe(value => console.log('Cutiest', value));
  }

}
