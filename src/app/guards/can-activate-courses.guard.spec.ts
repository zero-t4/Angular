import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCoursesGuard } from './can-activate-courses.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('CanActivateCoursesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CanActivateCoursesGuard]
    });
  });

  it('should ...', inject([CanActivateCoursesGuard], (guard: CanActivateCoursesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
