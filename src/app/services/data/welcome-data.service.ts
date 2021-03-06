import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constant";
import {WelcomeBean} from "../../components/bean/WelcomeBean";



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {
  }

  executeWelcomeMessage(name) {
    // let basicAuthenticationString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders(
    //   {Authorization: basicAuthenticationString}
    // );
    return this.http.get<WelcomeBean>(`${API_URL}/api/welcome/${name}`
      // {headers}
    );
  }

}
