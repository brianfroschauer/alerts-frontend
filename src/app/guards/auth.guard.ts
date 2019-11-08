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
import {AuthService} from '../services/auth-service/auth.service';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser != null) {
      return true;
    }

    this.router.navigate(['/sign-in']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser != null) {
      return true;
    }

    this.router.navigate(['/sign-in']);
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser != null) {
      return true;
    }

    this.router.navigate(['/sign-in']);
    return false;
  }
}
