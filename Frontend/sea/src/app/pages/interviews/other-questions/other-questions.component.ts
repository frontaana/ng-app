import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeavyTaskWorkerService } from '../../../services/heavy-task-worker.service';

@Component({
  selector: 'asea-other-questions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './other-questions.component.html',
  styleUrl: './other-questions.component.scss'
})
export class OtherQuestionsComponent {
  workerValue = 999999;
  result: number | null = null;

  constructor(private heavyTaskWorkerService: HeavyTaskWorkerService) {}

  public runWorker() {
    this.result = null;

    this.heavyTaskWorkerService.run(this.workerValue).subscribe({
      next: (res) => {
        console.log('Результат из воркера:', res);
        this.result = res;
      },
      error: (err) => console.error('Ошибка воркера:', err),
    });
  }
}
