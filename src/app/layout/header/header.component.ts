import { Component, OnInit } from '@angular/core';
import {JwtAuthenticationService} from "../../services/jwt-authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private authenticationService: JwtAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isUserLogIn();
  }

}
