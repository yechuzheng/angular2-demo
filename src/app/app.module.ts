import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InterceptorService } from 'ng2-interceptors';
import { ServerURLInterceptor } from './shared/services/serverURLInterceptor';
import { XHRBackend, RequestOptions } from '@angular/http';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {SharedModule} from "./shared/shared.module";

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor:ServerURLInterceptor){ // Add it here
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor); // Add it here
  return service;
}

@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent,
  ],
  imports: [
      SharedModule,
      BrowserModule,
      HttpModule,
      appRouting,
  ],
  providers: [
      ServerURLInterceptor, // Add it here
      {
        provide: InterceptorService,
        useFactory: interceptorFactory,
        deps: [XHRBackend, RequestOptions, ServerURLInterceptor] // Add it here, in the same order as the signature of interceptorFactory
      },
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
