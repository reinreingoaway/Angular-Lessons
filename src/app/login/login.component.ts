import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './login.model';

@Component({
  // This is the name of this component when integrated with other components.
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * This is a readily available class that will create a group of input data
   * the first parameter should be the structure of the controls inside that group
   * and the optional second parameter is the validators
   */
  loginForm = new FormGroup({
    /**
     * The forms module interacts with what we call controls,
     * a formgroup is also a subclass of a control,
     * form controls are single entity or datum
     * this first parameter is the default value
     * and the second parameter is the validators
     * most common validators are already available in angular forms
     */
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });

  // A getter method to easily get the actual control inside the loginForm group
  get emailControl() {
    return this.loginForm.controls.email;
  }

  get passwordControl() {
    return this.loginForm.controls.password;
  }

  // We inject services inside the constructor (you should already know what is a constructor)
  constructor(private loginService: LoginService) { }

  // This is part of angular lifecycle, will be discussed in the future. https://angular.io/guide/lifecycle-hooks
  ngOnInit(): void {
  }

  /**
   * This function should call the backend or authorizer to check if the credentials are valid.
   * For now let's do a mock for it.
   */
  onSubmit() {
    // We need to check first if the form has no errors
    if (this.loginForm.valid) {
      // If we are now sure that the form is valid, we will now call a service that will do an API call.
      const formValue: LoginForm = this.loginForm.value;

      this.loginService.authenticate(formValue.email, formValue.password);
    }
  }

  navigateToRegisterPage() {}
}
