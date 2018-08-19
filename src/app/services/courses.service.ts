import { Injectable } from '@angular/core';
import {
  ICourseItemBackEndModel,
  ICourseItemModel,
  ICourseItemUpdateModel,
} from '../course/course-item/course-item.model';
import { find, remove } from 'lodash';
import { BASE_URL } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { BackendResponse } from './backend-response.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courseItems = [];
  private subscriber: Subscriber<any[]>;
  private count = 5;
  private searchInput = '';
  public source: Observable<any>;

  constructor(private http: HttpClient) {}

  private observe() {
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
      this.observe();
      return this.source;
    }
  }

  public getCourseItems() {
    this.http
      .get<ICourseItemBackEndModel[]>(
        `${BASE_URL}/courses?start=0&count=${this.count}&textFragment=${
          this.searchInput
        }`,
      )
      .subscribe(
        data => this.callNext(CoursesService.mapBackEndData(data)),
        error => console.error(error),
      );
  }

  private async createCourseItem(item: ICourseItemModel) {
    await this.http.post<BackendResponse>(`${BASE_URL}/newCourse`, {
      params: JSON.stringify(item),
    }).toPromise();
  }

  private async removeCourseItem(id: number) {
    await this.http
      .post<BackendResponse>(`${BASE_URL}/removeCourse`, {
        params: {
          id,
        },
      }).toPromise()
  }

  private async updateCourseItem(id, data) {
    await this.http.post<BackendResponse>(`${BASE_URL}/updateCourse`, {
      params: {
        id,
        data,
      },
    });
  }

  public getMoreCourseItems() {
    this.count = this.count + 5;
    this.getCourseItems();
  }

  public filterCourseItems(searchInput: string) {
    this.searchInput = searchInput;
    this.getCourseItems();
  }

  public async createCourse(el: ICourseItemModel) {
    await this.createCourseItem(el);
    this.getCourseItems();
  }

  public async removeCourse(id: number) {
    await this.removeCourseItem(id);
    this.getCourseItems();
  }

  public async updateCourse(id: number, data: ICourseItemUpdateModel) {
    await this.updateCourseItem(id, data);
    this.getCourseItems();
  }

  getItemById(id): ICourseItemModel {
    return find(this.courseItems, { id }) || {};
  }

  static mapBackEndData(data: ICourseItemBackEndModel[]): ICourseItemModel[] {
    return data.map(el => ({
      id: el.id,
      title: el.name,
      creationDate: el.date,
      duration: el.length,
      description: el.description,
      // TODO isTopRated: el.isTopRated add later
      // TODO authors:    el.authors    add later
    }));
  }
}
