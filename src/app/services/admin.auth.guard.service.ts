import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { AuthGuard } from '../auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard extends AuthGuard {

  constructor( auth: AuthService) {
      super(auth);
  }

  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      var isAuthenticated = super.canActivate( next,
        state);
      if(isAuthenticated){
          return this.auth.roles.includes("Admin");
      }
      return false;
  }

}