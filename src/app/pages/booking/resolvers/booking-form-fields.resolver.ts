import { ResolveFn } from '@angular/router';
import { BookingService, FormFieldsType } from '../service/booking.service';
import { inject } from '@angular/core';

export const bookingFormFieldsResolver: ResolveFn<FormFieldsType> = (route, state) => {
  const bookingService = inject(BookingService)

  return bookingService.getFormFields()
};
