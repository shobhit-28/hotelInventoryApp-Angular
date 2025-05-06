import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { commentsResolver } from './comments.resolver';

describe('commentsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => commentsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
