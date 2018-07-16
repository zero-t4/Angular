import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({
    login,
    pass,
  }): void {
    localStorage.setItem('login', login);
    localStorage.setItem('pass', pass);
    console.log('logged in successfully');
  }

  logout(): void {
    localStorage.clear();
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
