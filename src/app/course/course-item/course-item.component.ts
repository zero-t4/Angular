import {Component, OnInit, Input, Output} from '@angular/core';
import {ICourseItemModel} from './course-item.model';
import {st} from '@angular/core/src/render3';

export class CourseItemEntity implements ICourseItemModel {
  public id;
  public title;
  public creationDate;
  public duration;
  public description;

  constructor(data: ICourseItemModel) {
    this.id = data.id;
    this.title = data.title;
    this.creationDate = data.creationDate;
    this.duration = data.duration;
    this.description = data.description;
  }

  public static listCreator(data: ICourseItemModel[]) {
    return data.map((el: ICourseItemModel) => new CourseItemEntity(el));
  }
}

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItemEntity;
  constructor() { }

  ngOnInit() {
  }

  @Output() deleteHandler(id: number): void {
    console.log(id);
  }

  formatTime(duration: number): string {
    const hours = Math.floor( duration / 60);
    const minutes = duration % 60;
    return `${hours ? hours + 'h' : ''} ${minutes}min`;
  }
}
