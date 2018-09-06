import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ICourseItemModel } from '../course-item/course-item.model';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { durationValidation } from './add-edit-page.component.validation';
import {SET_COURSE_DATA} from "../../redux/courses.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css'],
})
export class AddEditPageComponent implements OnInit {
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private coursesService: CoursesService,
    private store: Store<any>
  ) {}

  data: ICourseItemModel | any = new FormGroup({
    id: new FormControl(`new`),
    title: new FormControl(`Sample Title`, [ Validators.required, Validators.maxLength(50) ]),
    creationDate: new FormControl(`${new Date().toISOString().slice(0, 10)}`, [ Validators.required ]),
    duration: new FormControl(`131`, [ Validators.required, durationValidation ]),
    description: new FormControl(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`, [ Validators.required, Validators.maxLength(500) ]),
  });

  async ngOnInit() {

    if (!this.authService.isAuthenticated()) {
      return this.router.navigate(['/login']);
    }

    this.route.params.subscribe((data: ICourseItemModel | any) => {
      if (data.id !== 'new') {
        const fetchData: any =
          this.coursesService.getItemById(Number(data.id)) || {};
        const { id, title, creationDate, duration, description } = fetchData;

        this.data.id = id;
        this.data.title = title;
        this.data.creationDate = new Date(creationDate)
          .toISOString()
          .slice(0, 10);

        this.data.duration = duration;
        this.data.description = description;
        this.store.dispatch({
          type: SET_COURSE_DATA,
          payload: {
            courseName: this.data.id,
            courseData: this.data,
          }
        })
      }
    });
  }

  public async updateData(data) {
    if (this.data.id === 'new') {
      await this.coursesService.createCourse(data);
    } else {
      await this.coursesService.updateCourse(this.data.id, data);
    }
    this.location.back();
  }

  public cancel() {
    this.location.back();
  }
}
