import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomainsComponent } from './components/domains/domains.component';
import { FlowsComponent } from './components/flows/flows.component';

@Component({
  selector: 'ng-app-production',
  imports: [
    MatToolbarModule,
    RouterModule,
    DomainsComponent,
    FlowsComponent
  ],
  templateUrl: './production.component.html',
  styleUrl: './production.component.scss'
})
export class ProductionComponent {

}
