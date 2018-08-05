import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { IUserModel } from '../user.model';

export const BASE_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  public login({ login, pass: password }) {
    return this.http
      .post<IUserModel[]>(`${BASE_URL}/auth/login`, {
        params: { login, password },
      })
      .subscribe(
        async response => {
          const token = get(response, 'token', 0);
          localStorage.setItem('token', token);

          await this.router.navigate([`courses/`]);
        },
        e => {
          alert(`Ошибка ): ${e.statusText}`);
          return console.error(e);
        },
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  getUserToken(): string | null {
    return localStorage.getItem('token');
  }

  public getUserData() {
    return this.http
      .post<IUserModel[]>(`${BASE_URL}/auth/userinfo`, {})
  }
}
