import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DurationPipe} from '../../pipes/duration.pipe';
import {RouterTestingModule} from '@angular/router/testing';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CourseItemComponent, DurationPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window, 'confirm').and.returnValue(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteHandler', () => {
    expect(component.deleteHandler(1)).toBeFalsy();
  });
});
