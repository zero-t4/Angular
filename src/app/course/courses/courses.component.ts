import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      await this.router.navigate(['/login']);
    }
  }

}
