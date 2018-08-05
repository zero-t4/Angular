import { Injectable } from '@angular/core';
import {CourseItemEntity} from '../course/course-item/course-item.component';
import courseItems from './courseItems';
import {ICourseItemModel, ICourseItemUpdateModel} from '../course/course-item/course-item.model';
import { find, remove } from 'lodash';
import {BASE_URL} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private data = courseItems;
  private courseItems = courseItems;
  private count = 5;
  constructor(private http: HttpClient) { }

  public getMoreCourseItems(): Observable<CourseItemEntity[]> {
    this.count = this.count + 5;
    return this.http
      .get<CourseItemEntity[]>(`${BASE_URL}/courses?start=0&count=${this.count}`);
  }

  public getCourseItems(): Observable<CourseItemEntity[]> {
    return this.http
      .get<CourseItemEntity[]>(`${BASE_URL}/courses?start=0&count=${this.count}`);
  }

  filterCourseItems(searchInput: string): CourseItemEntity[] {
    this.courseItems = [
      ...this.data.filter(
        el => el
          .title
          .toLowerCase()
          .includes(
            searchInput.toLowerCase()
          )
      )
    ];

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
    return find(this.courseItems, { id }) || {};
  }

  updateItem(id: number, data: ICourseItemUpdateModel ): boolean {
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
