import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {JwtAuthenticationService} from "./jwt-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.jwtAuthenticationService.isUserLogIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
