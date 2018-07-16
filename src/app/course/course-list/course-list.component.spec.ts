import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ColorHighlightDirective} from '../../directives/color-bind.directive';
import {DurationPipePipe} from '../../pipes/duration-pipe.pipe';
import {OrderByPipe} from '../../pipes/order-by.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        ColorHighlightDirective,
        DurationPipePipe,
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
