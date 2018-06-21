import {Component, OnInit, Output} from '@angular/core';
import { CourseItemEntity } from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseItemEntity[] = [];

  constructor() { }

  loadMoreCoursesHandler(): void {
    console.log('Load more button – click handler');
  }

  ngOnInit() {
    console.log('ngOnInit', ' app-course-list');
    this.courseItems = CourseItemEntity.listCreator([
      {
        id: 0,
        title: 'First Title',
        creationDate: '14.06.2018',
        duration: 60,
        description: 'some description',
      },
      {
        id: 1,
        title: 'Second Title',
        creationDate: '11.06.2018',
        duration: 20,
        description: 'Cool description',
      },
      {
        id: 2,
        title: 'Third Title',
        creationDate: '01.06.2018',
        duration: 44,
        description: 'Awesome description',
      },
    ]);
  }
}
