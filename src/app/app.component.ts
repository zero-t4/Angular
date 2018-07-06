import {Component, OnInit} from '@angular/core';
import {CourseItemEntity} from './course/course-item/course-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private data;
  public courseItems;

  ngOnInit() {
    this.data = CourseItemEntity.listCreator([
      {
        id: 0,
        title: 'First Title',
        creationDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        duration: 60,
        description: 'some description',
      },
      // moved upper in order to see - how orderBy pipe works
      {
        id: 2,
        title: 'Third Title',
        creationDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        duration: 44,
        description: 'Awesome description',
      },
      {
        id: 1,
        title: 'Second Title',
        creationDate: new Date('2018-06-11'),
        duration: 20,
        description: 'Cool description',
      },
    ]);

    this.courseItems = [...this.data];
  }

  public filterFunc = (search) => {
    this.courseItems = [...this.data.filter(el => el.title.includes(search))];
  }
}
