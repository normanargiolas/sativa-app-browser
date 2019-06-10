import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPage} from "./pages/login/login.page";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ErrorComponent} from "./components/error/error.component";
import {ListTodosComponent} from "./components/list-todos/list-todos.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {AuthenticationGuard} from "./guards/authentication/authentication.guard";
import {TodoComponent} from "./components/todo/todo.component";
import {FullComponent} from "./layout/full/full.component";

const routes: Routes = [
  {
    path: '',
    component: FullComponent
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    canActivate: [AuthenticationGuard]
  },

  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
