import { Component, OnInit, Input } from '@angular/core';
import {CourseItemModel} from './course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItemModel;
  constructor() { }

  ngOnInit() {
  }

}
