import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tasks_important } from '../../constants/tasks';

@Component({
  selector: 'asea-task-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent {
  public title = `Cutiest`;

  tasks = tasks_important;
}
