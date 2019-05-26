import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    console.log('before ' + this.isUserLogIn());
    if (username === 'norman' && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLogIn());

      return true;
    }
    return false;
  }

  isUserLogIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

}
