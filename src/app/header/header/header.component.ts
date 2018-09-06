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
  private storedToken: string;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getSource().subscribe(
      response => {
        const token = response.token;
        this.user = get(response, 'name.first');

        if(token && this.storedToken !== token) {

          this.storedToken = token;
          this.authService.getUserData();
        }
      },
      e => {
        alert(`Ошибка ): ${e.statusText}`);
        return console.error(e);
      },
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
