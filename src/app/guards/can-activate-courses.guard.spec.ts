import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCoursesGuard } from './can-activate-courses.guard';

describe('CanActivateCoursesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateCoursesGuard]
    });
  });

  it('should ...', inject([CanActivateCoursesGuard], (guard: CanActivateCoursesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
