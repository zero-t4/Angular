import { Injectable } from '@angular/core';
import { CourseItemEntity } from '../course/course-item/course-item.component';
import {
  ICourseItemModel,
  ICourseItemUpdateModel,
} from '../course/course-item/course-item.model';
import { find, remove } from 'lodash';
import { BASE_URL } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courseItems = [];
  private count = 5;
  constructor(private http: HttpClient) {}

  public getMoreCourseItems() {
    this.count = this.count + 5;
    this.http
      .get<CourseItemEntity[]>(
        `${BASE_URL}/courses?start=0&count=${this.count}`,
      )
      .subscribe(
        data => {
          this.courseItems = data;
        },
        error => console.error(error),
      );
    return this.courseItems;
  }

  public getCourseItems() {
    this.http
      .get<CourseItemEntity[]>(
        `${BASE_URL}/courses?start=0&count=${this.count}`,
      )
      .subscribe(
        data => {
          this.courseItems = data;
        },
        error => console.error(error),
      );
    return this.courseItems;
  }

  public filterCourseItems(searchInput: string) {
    this.http
      .get<CourseItemEntity[]>(
        `${BASE_URL}/courses?start=0&count=${
          this.count
        }&textFragment=${searchInput}`,
      )
      .subscribe(
        data => {
          this.courseItems = data;
        },
        error => console.error(error),
      );
    return this.courseItems;
  }

  public createCourse(el: ICourseItemModel): boolean {
    this.courseItems = [...this.courseItems, el];

    return true;
  }

  getItemById(id: number): ICourseItemModel {
    return find(this.courseItems, { id }) || {};
  }

  updateItem(id: number, data: ICourseItemUpdateModel): boolean {
    const item = this.getItemById(id);
    const newItem: ICourseItemModel = {
      ...item,
      ...data,
    };
    this.removeItem(newItem.id);
    this.createCourse(newItem);

    return true;
  }

  removeItem(id: number): boolean {
    remove(this.courseItems, el => el.id === id);

    return true;
  }
}
