import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class InitGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('home');
      return true;
    }
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('home');
      return true;
    }
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('home');
      return true;
    }
    return false;
  }
}
