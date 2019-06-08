import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ErrorComponent} from "./components/error/error.component";
import {ListTodosComponent} from "./components/list-todos/list-todos.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {AuthenticationGuard} from "./guards/authentication/authentication.guard";
import {TodoComponent} from "./components/todo/todo.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'todos', component: ListTodosComponent, canActivate: [AuthenticationGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthenticationGuard]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [AuthenticationGuard]},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
