import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPage} from './pages/login/login.page';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ErrorComponent} from './components/error/error.component';
import {ListTodosComponent} from './components/list-todos/list-todos.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoutComponent} from './components/logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TodoComponent} from './components/todo/todo.component';
import {HttpIntercepterJwtAuthService} from "./interceptors/http/http-intercepter-jwt-auth.service";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FullComponent} from "./layout/full/full.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {HeaderComponent} from "./layout/header/header.component";
import {SharedModule} from "./shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    LoginPage,
    WelcomeComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterJwtAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
