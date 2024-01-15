import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    // Añadir importacion de Proveedores donde añado lo del httpClient para que se conecte
  importProvidersFrom(
    HttpClientModule,
  )],
};
