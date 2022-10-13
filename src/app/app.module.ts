import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Login module imported from the login directory
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  /**
   * Declarations define
   * which components will be part of each module
   * (usual practice is only one per module)
   * e.g. App Component for App Module
   */ 
  declarations: [
    AppComponent
  ],
  /**
   * Imports define
   * which modules will be used for the app component
   * This can be our own module or some modules from third party libraries
   * e.g. Login Module, Angular Material Input Module
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Added the login module to app module since we want the main component to display the login page
    LoginModule,
    BrowserAnimationsModule
  ],
  /**
   * Providers define
   * which services will be loaded when this module is being loaded
   * Will be discussed in the future
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
