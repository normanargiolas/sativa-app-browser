import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FullComponent} from "./full.component";
import {MaterialModule} from "../../material.module";
import {HeaderComponentModule} from "../header/header.module";
import {HeaderComponent} from "../header/header.component";

@NgModule({
  imports: [
    MaterialModule,
    Component,
    HeaderComponent,
    RouterModule.forChild([
      {
        path: '',
        component: FullComponent
      }
    ]),
  ],
  declarations: [FullComponent],
  exports: [FullComponent]
})
export class FullComponentModule {
}
