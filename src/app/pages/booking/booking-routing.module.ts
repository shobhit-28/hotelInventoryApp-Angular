import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingModule } from './booking.module';
import { bookingGuard } from '../../guards/bookingGuard/booking.guard';

export const bookingRoutes: Routes = [
  { path: '', component: BookingComponent, canDeactivate: [bookingGuard] }
];

@NgModule({
  imports: [BookingModule, RouterModule.forChild(bookingRoutes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
