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
    const data = {
      login: document.querySelector('#basic-email').value,
      pass: document.querySelector('#basic-password').value
    };

    this.authService.login(data)
  }

}
