import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login({
    login,
    pass,
  }): void {
    localStorage.setItem('login', login);
    localStorage.setItem('pass', pass);
    console.log('logged in successfully');

    this.router.navigate(['/courses']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('login') && localStorage.getItem('pass'));
  }

  getUserInfo() {
    const login = localStorage.getItem('login');
    const pass = localStorage.getItem('pass');
    return {
      login,
      pass,
    }
  }
}
