import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes2 } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes2),
    provideClientHydration(),
  ]
};

// provideAnimationsAsync - depr?

// используем zone.js
//    provideZoneChangeDetection({ eventCoalescing: true }), - убрали

