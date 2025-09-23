import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { routePaths } from './interfaces/enums';

import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ConsultationsComponent } from './pages/consultations/consultations.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { JSQuestionsComponent } from './pages/interviews/js-questions/js-questions.component';
import { NgQuestionsComponent } from './pages/interviews/ng-questions/ng-questions.component';
import { OtherQuestionsComponent } from './pages/interviews/other-questions/other-questions.component';
import { RxjsQuestionsComponent } from './pages/interviews/rxjs-questions/rxjs-questions.component';
import { PlannerComponent } from './components/planner/planner.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ ],
    canActivateChild: [],
    children: [
      { path: '', redirectTo: routePaths.planner, pathMatch: 'full'},
      { path: routePaths.interviews, component: InterviewsComponent },
      { path: routePaths.interviewsNg, component: NgQuestionsComponent, pathMatch: 'full'},
      { path: routePaths.interviewsJs, component: JSQuestionsComponent, pathMatch: 'full'},
      { path: routePaths.interviewsRxjs, component: RxjsQuestionsComponent, pathMatch: 'full'},
      { path: routePaths.interviewsOthers, component: OtherQuestionsComponent, pathMatch: 'full'},
      { path: routePaths.consultations, component: ConsultationsComponent, pathMatch: 'full'},
      { path: routePaths.blog, component: BlogComponent, pathMatch: 'full'},
      { path: routePaths.about, component: AboutComponent, pathMatch: 'full'},
      { path: routePaths.planner, component: PlannerComponent, pathMatch: 'full'},
    ]
  },
  { path: '**', redirectTo: '/'}
];
