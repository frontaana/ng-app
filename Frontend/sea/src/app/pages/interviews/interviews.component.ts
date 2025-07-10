import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'asea-interviews',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.scss'
})
export class InterviewsComponent {
  public themes = [
    {
      title: `JS tasks`,
      link: 'js'
    },
    {
      title: `Angular tasks`,
      link: 'ng'
    },
    {
      title: `RXJS tasks`,
      link: 'rxjs'
    },
    {
      title: `Other technologies`,
      link: 'others'
    },
  ];
  
  // Other technologies - web workers,
  
}
