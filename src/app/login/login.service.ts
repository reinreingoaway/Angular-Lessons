import { Injectable } from '@angular/core';

@Injectable(
  /**
   * We remove the object inside the Injectable instance.
   * { providedIn: 'root'}
   */
)
export class LoginService {

  constructor() { }

  authenticate(email: string, password: string) {
    console.log('call authentication api');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }
}
