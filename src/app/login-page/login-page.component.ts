import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  data = new FormGroup({
    login: new FormControl(),
    pass: new FormControl(),
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  loginHandler() {
    const { data: { login, pass } } = this;

    if (login && pass) {
      const data = {
        login,
        pass,
      };
      this.authService.login(data)
    } else {
      console.log('bad credentials')
    }
  }

}
