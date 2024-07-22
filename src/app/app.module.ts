import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpTokenInterceptorInterceptor} from "./interceptor/http-token-interceptor.interceptor";
import {KeycloakService} from "./services/keycloak/keycloak.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([httpTokenInterceptorInterceptor])),
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: (keycloakService: KeycloakService) => () => keycloakService.init(),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
