import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routePaths } from '../../interfaces/enums';

@Component({
  selector: 'asea-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = [
    {
      key: 'about',
      icon: '',
      title: 'About', // 2
      subTitle: 'some details',
      link: routePaths.about,
      isActive: true,
    },
    {
      key: 'interviews',
      icon: '',
      title: 'IT knowledge data', // 2
      subTitle: 'list and progress bars of themes',
      link: routePaths.interviews,
      isActive: false,
    },
    {
      key: 'consultations',
      icon: '',
      title: 'IT consultations', // 2
      subTitle: 'the questionnaire and my services',
      link: routePaths.consultations,
      isActive: true,
    },
    {
      key: 'blog',
      icon: '',
      title: 'IT blog',
      subTitle: 'list of posts',
      link: routePaths.blog,
      isActive: false,
    },
    {
      key: 'competency-map',
      icon: '',
      title: 'Competency map', // 1
      subTitle: 'knowledge base',
      link: routePaths.map,
      isActive: false,
    },
    {
      key: 'dashboard',
      icon: '',
      title: 'Task manager',
      subTitle: 'dashboard',
      link: routePaths.dashboard,
      isActive: false,
    },
    {
      key: 'free-school',
      icon: '',
      title: 'Free school',
      subTitle: 'business plan - researching and state',
      link: 'free-school',
      isActive: false,
    },
    {
      key: 'free-school',
      icon: '',
      title: 'Online planner',
      subTitle: 'Planner "For years", about choice, work, joy, life',
      link: routePaths.planner,
      isActive: true,
    },
  ];
  
  // menu = ['Business plan', 'Form', 'Опрос', 'Table']

}
