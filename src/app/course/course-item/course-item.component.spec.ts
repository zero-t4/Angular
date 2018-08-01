import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DurationPipe} from '../../pipes/duration.pipe';
import {Router} from "@angular/router";

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, DurationPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: Router,
        useValue: {
          navigate: jasmine.createSpy(
            'navigate',
          )
        }
      }]
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
