import { Injectable } from '@angular/core';
import {CourseItemEntity} from '../course/course-item/course-item.component';
import courseItems from './courseItems';
import {ICourseItemModel, ICourseItemUpdateModel} from '../course/course-item/course-item.model';
import { find, remove } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseItems = courseItems;
  constructor() { }

  getCourseItems(): CourseItemEntity[] {
    return this.courseItems;
  }

  createCourse(el: ICourseItemModel): boolean {
    this.courseItems = [
      ...this.courseItems,
      el,
    ];

    return true;
  }

  getItemById(id: number): ICourseItemModel {
    return find(this.courseItems, { id });
  }

  updateItem(id: number, data: ICourseItemUpdateModel ): boolean {
    const item = this.getItemById(id);
    const newItem = {
      ...item,
      ...data,
    };
    this.createCourse(newItem);
    this.removeItem(newItem.id);


    return true;
  }

  removeItem(id: number): boolean {
    remove(this.courseItems, el => el.id === id);
    return true;
  }
}
