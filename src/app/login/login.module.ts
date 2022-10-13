import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

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
    MatCardModule,
    // Adding the module for form related functionalities
    ReactiveFormsModule
  ],
  /**
   * Exports define
   * the declared components which other modules can reuse if they import the login module
   * If a component is not added as part of the exports, external modules will not be able to used it
   */
  exports: [LoginComponent],
  /**
   * Services that is part or used inside of this module
   */
  providers: [LoginService]
})
export class LoginModule { }
