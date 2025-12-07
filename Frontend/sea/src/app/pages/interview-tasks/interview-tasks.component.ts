import { Component } from '@angular/core';
import { GithubListComponent } from './github-list/github-list.component';

@Component({
  selector: 'ng-app-interview-tasks',
  imports: [GithubListComponent],
  templateUrl: './interview-tasks.component.html',
  styleUrl: './interview-tasks.component.scss',
})
export class InterviewTasksComponent {

}
