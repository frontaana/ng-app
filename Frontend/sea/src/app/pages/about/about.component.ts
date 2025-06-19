import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeavyTaskWorkerService } from '../../services/heavy-task-worker.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = 'Cutie';

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
