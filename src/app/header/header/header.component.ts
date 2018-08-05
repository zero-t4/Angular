import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {get} from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user: string = 's';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserData().subscribe(
      response => {
        this.user = get(response, 'name.first');
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
