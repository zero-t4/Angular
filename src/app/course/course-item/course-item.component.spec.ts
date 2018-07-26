import { async } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import {CoursesService} from '../../services/courses.service';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;

  beforeEach(async(() => {
    component = new CourseItemComponent(new CoursesService());
    spyOn(component, 'ngOnInit');
    spyOn(window, 'confirm').and.returnValue(true);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteHandler', () => {
    expect(component.deleteHandler(1)).toBeFalsy();
  });
});
