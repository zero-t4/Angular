import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {ICourseItemModel} from '../course-item/course-item.model';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css']
})
export class AddEditPageComponent implements OnInit {
  @Input() newData = {};
  public routeParams: ICourseItemModel | any = {};

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data: ICourseItemModel | any) => {
      if (data.id !== 'new') {
        const fetchData: any = this.coursesService.getItemById(Number(data.id)) || {};
        const {
          id,
          title,
          creationDate,
          duration,
          description,
        } = fetchData;
        console.log(fetchData, 'fetchData');
        this.routeParams.id = id;
        this.routeParams.title = title;
        this.routeParams.creationDate = new Date(creationDate).toISOString().slice(0,10);
        this.routeParams.duration = duration;
        this.routeParams.description = description;
      }
    });
  };

  public updateData(newData) {
    console.log(newData);
    this.coursesService.updateItem(this.routeParams.id, newData)
  }

  public cancel() {
    this.location.back();
  }

}
