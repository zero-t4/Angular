import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ICourseItemModel } from '../course-item/course-item.model';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css'],
})
export class AddEditPageComponent implements OnInit {
  @Input()
  newData: ICourseItemModel | any = {
    id: 'new',
    title: 'Sample title',
    creationDate: new Date().toISOString().slice(0, 10),
    duration: 131,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  };

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private coursesService: CoursesService,
  ) {}

  async ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      return await this.router.navigate(['/login']);
    }

    this.route.params.subscribe((data: ICourseItemModel | any) => {
      if (data.id !== 'new') {
        const fetchData: any =
          this.coursesService.getItemById(Number(data.id)) || {};
        const { id, title, creationDate, duration, description } = fetchData;

        this.newData.id = id;
        this.newData.title = title;
        this.newData.creationDate = new Date(creationDate)
          .toISOString()
          .slice(0, 10);
        this.newData.duration = duration;
        this.newData.description = description;
      }
    });
  }

  public async updateData(newData) {
    if (this.newData.id === 'new') {
      await this.coursesService.createCourse(newData);
    } else {
      await this.coursesService.updateCourse(this.newData.id, newData);
    }
    this.location.back();
  }

  public cancel() {
    this.location.back();
  }
}
