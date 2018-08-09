import {Component, OnInit, Input } from '@angular/core';
import {ICourseItemBackEndModel, ICourseItemModel} from './course-item.model';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';

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

  public static listCreator(data: ICourseItemBackEndModel[]) {
    return data.map((el: ICourseItemBackEndModel) => {

      return new CourseItemEntity({
        id: el.id,
        title: el.name,
        creationDate: el.date,
        duration: el.length,
        description: el.description,
        // TODO isTopRated: el.isTopRated add later
        // TODO authors:    el.authors    add later
      });
    });
  }
}

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItemEntity;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public edit(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }

  public deleteHandler(id: number): void {
    const answer = window.confirm('Do you really want to delete this item?');
    if (answer) {
      this.coursesService.removeCourse(id);
    }
  }
}
