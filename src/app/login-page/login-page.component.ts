import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginHandler() {
    const login =   document.querySelector('#basic-email') as HTMLInputElement;
    const pass = document.querySelector('#basic-password') as HTMLInputElement;

    const data = {
      login: login.value,
      pass: pass.value
    };

    this.authService.login(data)
  }

}
