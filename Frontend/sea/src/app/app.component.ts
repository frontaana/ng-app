import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'asea-root',
  standalone: true,
  imports: [
    BaseModalComponent,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    RouterOutlet,
    SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

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

// сервер, отдавать данные, потренить RXJS и промисы
// разные данные, потренить Typescript
// своя UI библиотека компонентов