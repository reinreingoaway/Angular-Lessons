import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // Adding the modules for angular material and flex layout packages, Check documentation which modules are needed to be used
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    // Adding the module for form related functionalities
    ReactiveFormsModule
  ],
  /**
   * Exports define
   * the declared components which other modules can reuse if they import the login module
   * If a component is not added as part of the exports, external modules will not be able to used it
   */
  exports: [LoginComponent]
})
export class LoginModule { }
