import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
   }

   get key(): any {
     return {
      token: 'secret-token',
      user: 'secret-user'
     };
   }

   createSession(auth: string) {
     return localStorage.setItem(this.key.token, auth);
   }

   createUser(user: any) {
    return localStorage.setItem(this.key.user, user);
   }

   removeUser() {
     return localStorage.removeItem(this.key.user);
   }

   removeSession() {
     return localStorage.removeItem(this.key.token);
   }

   getSession(): string {
     return localStorage.getItem(this.key.token);
   }

   getUser(): any {
     return JSON.parse(localStorage.getItem(this.key.user));
   }

   decodeSession(): any {
     const auth = JSON.parse(this.getSession());
     if (auth) {
       return this.jwtHelper.decodeToken(auth.access_token);
     }
     return null;
   }

   isAuthenticated(): boolean {
     const auth = JSON.parse(this.getSession());
     let isAuthed = false;
     try {
       isAuthed = auth && !this.jwtHelper.isTokenExpired(auth.access_token);
     } catch (error) {
       this.removeSession();
       this.removeUser();
     }
     return isAuthed;
   }

}
