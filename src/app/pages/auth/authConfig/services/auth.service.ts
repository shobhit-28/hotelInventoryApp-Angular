import { Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false
  private admin: boolean = false

  constructor(
    private router: Router
  ) { }

  public login(email: string, password: string): void {
    if (email === 's@gm.co') {
      if (password === 'admin') {
        this.loggedIn = true
        this.admin = true
      } else if (password === 'user') {
        this.loggedIn = true
        this.admin = false
      }
      this.router.navigate(['rooms'])
    } else {
      alert('Try again later');
    }
  }

  public isLoggedIn(): boolean {
    return this.loggedIn
  }

  public isAdmin(): boolean {
    return this.admin
  }
}
