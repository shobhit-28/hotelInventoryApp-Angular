import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { InitService } from '../initService/init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteConfigToken } from './services/routeConfig/route-config.service';

function initApp(initService: InitService) {
  return () => initService.initFunc()
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(),
    { provide: APP_INITIALIZER, useFactory: initApp, multi: true, deps: [InitService] },
    { provide: RouteConfigToken, useValue: { title: 'Home' } },
    provideAnimationsAsync()
  ]
};
