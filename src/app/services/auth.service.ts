import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { HttpClient } from '@angular/common/http';
import {IUserModel, IUserModelToken} from '../user.model';
import {Observable, Subscriber} from "rxjs";

export const BASE_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subscriber: Subscriber<any[]>;
  private userData: any;
  public source: Observable<any>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  private observe() {
    this.source = new Observable<any[]>(subscriber => {
      this.subscriber = subscriber;
    });
  }

  public callNext(data) {
    if (data === 'clear') {
      this.userData = {};
    } else if (data) {
      this.userData = {
        ...this.userData,
        ...data,
      };
    }
    if (this.subscriber) {
      this.subscriber.next(this.userData);
    }
  }

  public getSource() {
    if (this.source) {
      return this.source;
    } else {
      this.observe();
      return this.source;
    }
  }

  public login({ login, pass: password }) {
    return this.http
      .post<IUserModelToken[]>(`${BASE_URL}/auth/login`, {
        params: { login, password },
      })
      .subscribe(
        async response => {
          const token = get(response, 'token', 0);
          localStorage.setItem('token', token);
          this.callNext({
            token
          });

          await this.router.navigate([`courses/`]);
        },
        e => {
          alert(`Ошибка ): ${e.statusText}`);
          return console.error(e);
        },
      );
  }

  public logout(): void {
    localStorage.clear();
    this.callNext('clear');

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
      .subscribe(
        async response => {
          this.callNext({
            ...response
          });
        },
        e => {
          alert(`Ошибка ): ${e.statusText}`);
          return console.error(e);
        },
      );
  }
}
