import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../../pages/booking/booking.component';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
  const snackBar = inject(MatSnackBar)

  if (!component.bookingForm.pristine) {
    snackBar.open('You have unsaved changes', 'Discard')
  }
  return component.bookingForm.pristine;
};
