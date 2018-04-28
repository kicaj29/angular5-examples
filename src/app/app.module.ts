import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import {StoreAppModuleService} from './store-app-module.service';
import {StoreBaseService} from './di-decorators/comp1/store-base.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouting
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // di-decorators providers
    {
      provide: StoreBaseService,
      useClass: StoreAppModuleService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
