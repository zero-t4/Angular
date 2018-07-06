import {Component, Input} from '@angular/core';
import { CourseItemEntity } from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() public items: CourseItemEntity[] = [];
  constructor() { }

  loadMoreCoursesHandler(): void {
    console.log('Load more button – click handler');
  }
}
