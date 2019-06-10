import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatListModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
