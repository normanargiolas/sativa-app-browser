import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {JwtAuthenticationService} from "../jwt-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterJwtAuthService implements HttpInterceptor {

  constructor(private  authenticationService: JwtAuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'norman';
    // let password = 'dummy';
    // let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);

    let authenticationString = this.authenticationService.getAuthenticatedToken();
    let username = this.authenticationService.getAuthenticatedUser();

    if (authenticationString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: authenticationString
        }
      });
    }

    return next.handle(request);
  }
}
