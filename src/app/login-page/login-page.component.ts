import { get } from 'lodash';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  data: any = new FormGroup({
    login: new FormControl(),
    pass: new FormControl(),
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  loginHandler() {
    const login = get(this, 'data.value.login');
    const pass = get(this, 'data.value.pass');
    console.log(login, pass);
    if (login && pass) {
      const data = {
        login,
        pass,
      };
      this.authService.login(data);
    } else {
      console.log('bad credentials')
    }
  }

}
