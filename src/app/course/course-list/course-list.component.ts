import { Component, OnInit } from '@angular/core';
import {CourseItemModel} from '../course-item/course-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseItemModel[] = [
    {
      id: 0,
      title: 'One',
      creationDate: '14.06.2018',
      duration: 60,
      description: 'some description',
    },
    {
      id: 1,
      title: 'Two',
      creationDate: '11.06.2018',
      duration: 20,
      description: 'Cool description',
    },
    {
      id: 2,
      title: 'Three',
      creationDate: '01.06.2018',
      duration: 44,
      description: 'Awesome description',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
