import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constant";
import {WelcomeBean} from "../../bean/WelcomeBean";



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {
  }

  // executeHelloWorldBeanService() {
  //   return this.http.get<WelcomeBean>(`${API_URL}/hello-world-bean`);
  // }

  executeWelcomeMessage(name) {
    // let basicAuthenticationString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders(
    //   {Authorization: basicAuthenticationString}
    // );
    return this.http.get<WelcomeBean>(`${API_URL}/api/welcome/${name}`
      // {headers}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'norman';
  //   let password = 'dummy';
  //   let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthenticationString;
  // }

}
