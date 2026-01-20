import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

//provideRouter(routes) 意思是在我的網站相依注入路由的機制
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //provideHttpClient()是專案要用HttpClient呼叫API時就必須來相依注入
    provideHttpClient()]
};
