import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {LoginFormComponent} from './login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LogInFormComponentModule {
}
