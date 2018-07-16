import {Component, OnInit } from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {CourseItemEntity} from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseItemEntity[];

  constructor(private coursesService: CoursesService) { }

  private loadMoreCoursesHandler(): void {
    console.log('Load more button – click handler');
  }

  ngOnInit() {
    this.loadCourses();
  }

  public loadCourses(): void {
    this.courseItems = this.coursesService.getCourseItems();
  }
}
