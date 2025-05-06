import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { loginGuardMatch } from './login.guard';

describe('loginGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginGuardMatch(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
