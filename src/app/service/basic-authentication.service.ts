import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {API_URL} from "../app.constant";


export const TOKEN = 'token';
export const AUTHENTICATERUSER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(private http: HttpClient) {
  }

  executeJWTAuthenticationService(username, password) {
    return this.http.post<any>(
      `${API_URL}/api/auth/login`,
      {username, password}).pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATERUSER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      })
    );
  }

  executeBasicAuthenticationService(username, password) {
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders(
      {Authorization: basicAuthenticationString}
    );
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      {headers}).pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATERUSER, username);
        sessionStorage.setItem(TOKEN, basicAuthenticationString);
        return data;
      })
    );
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem(AUTHENTICATERUSER);
    return !(user === null);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLogIn() {
    let user = sessionStorage.getItem(AUTHENTICATERUSER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATERUSER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
