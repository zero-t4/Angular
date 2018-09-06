import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subscriber: Subscriber<boolean>;
  public source: Observable<any>;

  constructor() { }

  private observe() {
    this.source = new Observable<boolean>(subscriber => {
      this.subscriber = subscriber;
    });
  }

  public callNext(data) {
    if (this.subscriber) {
      this.subscriber.next(data);
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

  public show(): void {
    this.callNext(true);
  }

  public hide(): void {
    this.callNext(false);
  }

}
