import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { IUserModel } from '../user.model';
import { Store, select } from '@ngrx/store';
import {LOGIN_FAIL, LOGIN_SUCCESS} from "../redux/auth.reducer";

export const BASE_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token;
  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<any>
  ) {
    this.token = store.pipe(select('auth'));
  }

  public login({ login, pass: password }) {
    return this.http
      .post<IUserModel[]>(`${BASE_URL}/auth/login`, {
        params: { login, password },
      })
      .subscribe(
        async response => {
          const token = get(response, 'token', 0);
          localStorage.setItem('token', token);

          this.store.dispatch({
            type: LOGIN_SUCCESS,
            payload: { token },
          });

          await this.router.navigate([`courses/`]);
        },
        e => {

          this.store.dispatch({
            type: LOGIN_FAIL
          });

          alert(`Ошибка ): ${e.statusText}`);
          return console.error(e);
        },
      );
  }

  public logout(): void {
    localStorage.clear();
    this.store.dispatch({
      type: LOGIN_FAIL
    });
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  public getUserToken(): string | null {
    return localStorage.getItem('token');
  }

  public getUserData() {
    return this.http
      .post<IUserModel[]>(`${BASE_URL}/auth/userinfo`, {})
  }
}
