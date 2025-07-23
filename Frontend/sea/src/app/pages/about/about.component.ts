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
    'Senior frontend developer',
    'Тренер по фридайвингу',
    'Мужчина-опора, щедрый мужчина, добрый мужчина',
    'Сон в 23-00',
    'Питание чистое',
    'АПП без сладкого',
    'Ресурсная',
    'Отлетевшая',
    'Мне все можно',
    'Я все могу',
    'У меня есть деньги',
    'Все всегда вовремя',
    'Совершенное совершенно',
    'Все просто',
  ]

  ngOnInit() {
    // this.title.pipe(
    //   delay(10000),
    // ).subscribe(value => console.log('Cutiest', value));
  }

}
