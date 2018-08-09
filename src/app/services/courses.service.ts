import {Injectable, OnInit} from '@angular/core';
import { CourseItemEntity } from '../course/course-item/course-item.component';
import {
  ICourseItemModel,
  ICourseItemUpdateModel,
} from '../course/course-item/course-item.model';
import { find, remove } from 'lodash';
import { BASE_URL } from './auth.service';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CoursesService implements OnInit {
  private courseItems = [];
  private subscriber: Subscriber<any[]>;
  private count = 5;
  private searchInput = '';
  public source: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.source = new Observable<any[]>(subscriber => {
      this.subscriber = subscriber;
    });
  }

  public callNext(data) {
    if (data) {
      this.courseItems = data;
    }
    if (this.subscriber) {
      this.subscriber.next(this.courseItems);
    }
  }

  public getSource() {
    if (this.source) {
      return this.source;
    } else {
      return null;
    }
  }

  public getCourseItems() {
    this.http
      .get<CourseItemEntity[]>(
        `${BASE_URL}/courses?start=0&count=${this.count}&textFragment=${this.searchInput}`,
      )
      .subscribe(
        data => this.callNext(data),
        error => console.error(error),
      );
    return this.courseItems;
  }

  private createCourseItem(item: ICourseItemModel) {
    this.http
      .post<CourseItemEntity[]>(
        `${BASE_URL}/newCourse`,
        {
          params: JSON.stringify(item),
        }
      );
  }

  private removeCourseItem(id: number) {
    this.http
      .post<CourseItemEntity[]>(
        `${BASE_URL}/removeCourse`,
        {
          params: {
            id
          }
        }
      );
  }

  private updateCourseItem(id, data) {
    this.http
      .post<CourseItemEntity[]>(
        `${BASE_URL}/updateCourse`,
        {
          params: {
            id,
            data,
          }
        }
      );
  }

  public getMoreCourseItems() {
    this.count = this.count + 5;
    this.getCourseItems();
  }

  public filterCourseItems(searchInput: string) {
    this.searchInput = searchInput;
    this.getCourseItems();
  }

  public createCourse(el: ICourseItemModel) {
    this.createCourseItem(el);
    this.getCourseItems();
  }

  public removeCourse(id: number) {
    this.removeCourseItem(id);
    this.getCourseItems();
  }

  public updateCourse(id: number, data: ICourseItemUpdateModel) {
    this.updateCourseItem(id, data);
    this.getCourseItems();
  }

  getItemById(id: number): ICourseItemModel {
    return find(this.courseItems, { id }) || {};
  }

}
