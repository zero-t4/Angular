import { TestBed, inject } from '@angular/core/testing';

import { CanActivateIsAuthenticatedGuard } from './can-activate-is-authenticated-guard.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('CanActivateIsAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CanActivateIsAuthenticatedGuard]
    });
  });

  it('should ...', inject([CanActivateIsAuthenticatedGuard], (guard: CanActivateIsAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
