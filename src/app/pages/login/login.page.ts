import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {JwtAuthenticationService} from "../../services/jwt-authentication.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})

export class LoginPage implements OnInit {

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private router: Router,
              private jwtAuthenticationService: JwtAuthenticationService) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
  }

  addFormControl(name: string, formGroup: FormGroup): void {
    this.form.addControl(name, formGroup);
  }

  handleAuthentication() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const username = formValue.logInForm.username;
      const password = formValue.logInForm.password;
      this.jwtAuthenticationService.executeAuthenticationService(username, password)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['welcome', username]);
          this.invalidLogin = false;
        }, error => {
          console.log(error);
          this.invalidLogin = true;
        });
    }
  }
}
