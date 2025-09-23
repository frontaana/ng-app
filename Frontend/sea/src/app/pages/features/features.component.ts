import { Component } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { routePaths } from '../../interfaces/enums';

@Component({
  selector: 'ng-app-features',
  standalone: true,
  imports: [
    MatListModule,
    RouterLink
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  tasksList = [
    {
      title: 'форма',
      link: `./${routePaths.form}`,
      isActive: false
    }
  ]
}
