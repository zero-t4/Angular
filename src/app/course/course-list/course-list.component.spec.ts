import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ColorHighlightDirective} from '../../directives/color-bind.directive';
import {DurationPipe} from '../../pipes/duration.pipe';
import {OrderByPipe} from '../../pipes/order-by.pipe';
import {CourseItemComponent} from '../course-item/course-item.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        ColorHighlightDirective,
        CourseItemComponent,
        DurationPipe,
        OrderByPipe,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
