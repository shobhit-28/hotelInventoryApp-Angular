import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookingFormFieldsResolver } from './booking-form-fields.resolver';

describe('bookingFormFieldsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => bookingFormFieldsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
