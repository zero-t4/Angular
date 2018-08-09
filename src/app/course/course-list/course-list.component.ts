import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CourseItemEntity } from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseItemEntity[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getSource().subscribe(
      newData => {
        console.log('newData from Observer', newData);
        return this.courseItems = newData;
      },
      error => console.error(error)
    );
    this.loadCourses();
  }

  public loadCourses(): void {
    this.coursesService.getCourseItems();
  }

  public loadMoreCoursesHandler(): void {
    this.coursesService.getMoreCourseItems();
  }
}
