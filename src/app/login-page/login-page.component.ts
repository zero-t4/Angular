import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {P} from '@angular/core/src/render3';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() login: string;
  @Input() pass: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginHandler() {
    const { login, pass } = this;

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
