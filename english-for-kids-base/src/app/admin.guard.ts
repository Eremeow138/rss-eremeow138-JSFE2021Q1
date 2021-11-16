import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  isTokenExist = false;

  constructor(private readonly authenticationService: AuthenticationService) {
    const adminTokenFromLocalStorage = localStorage.getItem('adminToken');
    if (adminTokenFromLocalStorage && adminTokenFromLocalStorage !== '') {
      this.isTokenExist = true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authenticationService.getToken().subscribe(token => {
      this.isTokenExist = token !== '';
    });
    return this.isTokenExist;
  }
}
