import { async } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;

  beforeEach(async(() => {
    component = new CourseItemComponent();
    spyOn(component, 'ngOnInit');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteHandler', () => {
    expect(component.deleteHandler(1)).toBeFalsy();
  });
});
