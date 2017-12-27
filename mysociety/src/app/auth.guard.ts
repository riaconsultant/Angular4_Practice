import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { Router,CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(private auth:AuthService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.auth.isAuthenticated()){
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }

  canActivateChild(next:ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
  return true;
  }
}
