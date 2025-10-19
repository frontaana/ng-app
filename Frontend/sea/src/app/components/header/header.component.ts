import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routePaths } from '../../interfaces/enums';

@Component({
    selector: 'ng-app-header',
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
      isActive: false,
    },
    {
      key: 'consultations',
      icon: '',
      title: 'IT consultations',
      subTitle: 'leave a request',
      link: routePaths.consultations,
      isActive: true,
    },
    {
      key: 'articles',
      icon: '',
      title: 'IT articless',
      subTitle: 'read and learn',
      link: routePaths.articles,
      isActive: true,
    },
    {
      key: 'competency-map',
      icon: '',
      title: 'Competency roadmap',
      subTitle: 'determine your level',
      link: routePaths.map,
      isActive: false,
    },
  ];

}
