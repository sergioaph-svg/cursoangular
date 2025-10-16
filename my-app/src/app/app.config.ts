import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BASE_URL } from './base_url';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide:BASE_URL,
      useValue:'https://ominous-space-trout-wrq554g7ggrjhg57v-3000.app.github.dev'
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch()
    )
  ]
};