import {Component, OnInit } from '@angular/core';
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
        creationDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        duration: 60,
        description: 'some description',
      },
      // moved upper in order to see - how orderBy pipe works
      {
        id: 2,
        title: 'Third Title',
        creationDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        duration: 44,
        description: 'Awesome description',
      },
      {
        id: 1,
        title: 'Second Title',
        creationDate: new Date('2018-06-11'),
        duration: 20,
        description: 'Cool description',
      },
    ]);
  }
}
