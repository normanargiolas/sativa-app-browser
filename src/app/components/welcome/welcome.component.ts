import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../../services/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  name = '';
  welcomeMessageFromService: string;

  //ActivateRouete
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {
  }

  ngOnInit() {
    console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.executeWelcomeMessage(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

}
