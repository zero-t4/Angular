import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {CourseItemEntity} from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseItemEntity[];

  constructor(private coursesService: CoursesService) { }

  public loadMoreCoursesHandler(): void {
    this
      .coursesService
      .getMoreCourseItems()
      // TODO resolve type error and remove
      // .subscribe((courses: ICourseItemBackEndModel[] = []) => {
      .subscribe((courses: any = []) => {
        this.courseItems = CourseItemEntity.listCreator(courses);
      });
  }

  ngOnInit() {
    this.loadCourses();
  }

  public loadCourses(): void {
    this
      .coursesService
      .getCourseItems()
        // TODO resolve type error and remove
        // .subscribe((courses: ICourseItemBackEndModel[] = []) => {
        .subscribe((courses: any = []) => {
        this.courseItems = CourseItemEntity.listCreator(courses);
      });
  }
}
