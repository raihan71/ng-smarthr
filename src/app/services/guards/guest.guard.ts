import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate  {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([`account`]);
      return false;
    }
    return true;
  }
}
