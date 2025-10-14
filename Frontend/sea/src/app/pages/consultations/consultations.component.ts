import { Component } from '@angular/core';

import { routePaths } from '../../interfaces/enums';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ng-app-consultations',
  standalone: true,
  imports: [
    MatListModule,
    RouterLink
  ],
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.scss'
})
export class ConsultationsComponent {
  list = [
    {
      title: 'форма',
      link: `./${routePaths.form}`,
      isActive: false
    }
  ]

}
