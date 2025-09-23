import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routePaths } from '../../interfaces/enums';

@Component({
  selector: 'ng-app-header',
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
      title: 'About',
      subTitle: 'some details',
      link: routePaths.about,
      isActive: true,
    },
    {
      key: 'consultations',
      icon: '',
      title: 'IT consultations',
      subTitle: 'the questionnaire',
      link: routePaths.consultations,
      isActive: true,
    },
    {
      key: 'competency-map',
      icon: '',
      title: 'Competency map',
      subTitle: 'knowledge base',
      link: routePaths.map,
      isActive: false,
    },
  ];

}
