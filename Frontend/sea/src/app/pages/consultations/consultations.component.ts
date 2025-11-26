import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { LoaderService } from '../../services/loader.service';
import { ModalComponent } from '../../shared/modal/modal.component';


@Component({
    selector: 'ng-app-consultations',
    imports: [
        ModalComponent,
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
