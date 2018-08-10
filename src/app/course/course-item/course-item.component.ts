import {Component, OnInit, Input } from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';
import {ICourseItemModel} from "./course-item.model";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: ICourseItemModel;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public edit(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }

  public deleteHandler(id: number): void {
    const answer = window.confirm('Do you really want to delete this item?');
    if (answer) {
      this.coursesService.removeCourse(id);
    }
  }
}
