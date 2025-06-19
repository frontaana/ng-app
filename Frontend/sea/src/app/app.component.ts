import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

// сервер, отдавать данные, потренить RXJS и промисы
// разные данные, потренить Typescript
// своя UI библиотека компонентов