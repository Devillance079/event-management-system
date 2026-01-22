import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // <--- THIS is what was missing causing the error
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);