import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseModalComponent } from '../../components/base-modal/base-modal.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { LoaderService } from '../../services/loader.service';


@Component({
    selector: 'ng-app-consultations',
    imports: [
        BaseModalComponent,
        CommonModule,
        FooterComponent,
        HeaderComponent,
        LoaderComponent,
        RouterOutlet,
        SidebarComponent
    ],
    templateUrl: './consultations.component.html',
    styleUrl: './consultations.component.scss',

})
export class ConsultationsComponent {
  preloader$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.preloader$ = this.loaderService.status$;
  }

  ngOnInit() {
    this.preloader$ = this.loaderService.status$;
    this.loaderService.on();
    setTimeout(() => {
      this.loaderService.off();
    }, 3000);
  }
}
