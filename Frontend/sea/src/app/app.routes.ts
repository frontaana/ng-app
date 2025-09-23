import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { routePaths } from './interfaces/enums';

import { AboutComponent } from './pages/about/about.component';
import { ConsultationsComponent } from './pages/consultations/consultations.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ ],
    canActivateChild: [],
    children: [
      { path: '', redirectTo: routePaths.sandbox, pathMatch: 'full'},
      { path: routePaths.consultations, component: ConsultationsComponent, pathMatch: 'full'},
      { path: routePaths.about, component: AboutComponent, pathMatch: 'full'},
      { path: routePaths.sandbox, component: SandboxComponent, pathMatch: 'full'},
    ]
  },
  { path: '**', redirectTo: '/'}
];
