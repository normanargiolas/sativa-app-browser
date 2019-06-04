import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'norman';
    let password = 'dummy';
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);

    request.clone({
      setHeaders: {
        Authorization: basicAuthenticationString
      }
    });
    return next.handle(request);
  }
}
