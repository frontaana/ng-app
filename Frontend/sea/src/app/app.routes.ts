import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { routePaths } from './interfaces/enums';

import { ConsultationsComponent } from './pages/consultations/consultations.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { FormComponent } from './pages/consultations/form/form.component';
import { ProductionComponent } from './pages/production/production.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    canActivateChild: [],

    children: [
      { path: '', redirectTo: routePaths.production, pathMatch: 'full'},
      { path: routePaths.production, component: ProductionComponent, pathMatch: 'full', children: [
        { path: routePaths.flows, component: ProductionComponent, pathMatch: 'full'},
        { path: routePaths.domains, component: ProductionComponent, pathMatch: 'full'},
      ]},

      { path: routePaths.consultations, component: ConsultationsComponent, pathMatch: 'full', children: [
        { path: routePaths.map, component: ConsultationsComponent, pathMatch: 'full'},
        { path: routePaths.form, component: FormComponent, pathMatch: 'full'},
      ]},
      { path: routePaths.articles, component: ArticlesComponent, pathMatch: 'full'},    
    ]
  },
  { path: '**', redirectTo: '/'}
];

// canActivate: [], canActivateChild: []
export const routes2: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      { path: '', redirectTo: `${routePaths.production}/${routePaths.flows}`, pathMatch: 'full'},
      { path: `${routePaths.production}/${routePaths.flows}`, loadComponent: () => import('./pages/production/production.component').then(m => m.ProductionComponent) },
    ]
  },
  { path: '**', redirectTo: '/'}
];
