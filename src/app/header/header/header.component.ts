import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {get} from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public user: string;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getSource().subscribe(
      response => {
        console.log('data from o - ', response);
        this.user = get(response, 'name.first');
      },
      e => {
        alert(`Ошибка ): ${e.statusText}`);
        return console.error(e);
      },
    );
    this.authService.getUserData();
  }

  logout(): void {
    this.authService.logout();
  }
}
