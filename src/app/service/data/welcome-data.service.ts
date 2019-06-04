import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message: string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {
  }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    let basicAuthenticationString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders(
      {Authorization: basicAuthenticationString}
    );
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-variable/${name}`,
      {headers});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'norman';
    let password = 'dummy';
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationString;
  }

}
