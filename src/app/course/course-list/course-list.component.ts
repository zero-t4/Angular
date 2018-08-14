import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import {ICourseItemModel} from "../course-item/course-item.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public courseItems: ICourseItemModel[];

  constructor(private coursesService: CoursesService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit() {
    this.coursesService.getSource()
      .subscribe(
      newData => {
        console.log('newData from Observer', newData);
        this.courseItems = newData;
        // TODO change to container -> component model
        this.changeDetection.markForCheck();
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
