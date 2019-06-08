import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ErrorComponent} from './components/error/error.component';
import {ListTodosComponent} from './components/list-todos/list-todos.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoutComponent} from './components/logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TodoComponent} from './components/todo/todo.component';
import {HttpIntercepterJwtAuthService} from "./interceptors/http/http-intercepter-jwt-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterJwtAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
