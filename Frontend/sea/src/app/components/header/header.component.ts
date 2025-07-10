import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = [
    {
      key: 'dashboard',
      icon: '',
      title: 'Task manager',
      subTitle: 'dashboard',
      isActive: true,
    },
    {
      key: 'free-school',
      icon: '',
      title: 'Free school',
      subTitle: 'business plan - researching and state',
      isActive: false,
    },
    {
      key: 'free-blog',
      icon: '',
      title: 'Free blog', // 2
      subTitle: 'breath training, posts, my progress',
      isActive: true,
    },
    {
      key: 'it-consultations',
      icon: '',
      title: 'IT consultations', // 2
      subTitle: 'the questionnaire and my services',
      isActive: true,
    },
    {
      key: 'it-blog',
      icon: '',
      title: 'IT blog',
      subTitle: 'list of posts',
      isActive: true,
    },
    {
      key: 'competency-map',
      icon: '',
      title: 'Competency map', // 1
      subTitle: 'knowledge base',
      isActive: true,
    },
  ];
  
  // menu = ['Business plan', 'Form', 'Опрос', 'Table']

}
