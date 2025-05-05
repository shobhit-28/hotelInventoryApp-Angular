import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { EmailValidatorDirective } from '../../directives/emailValidator/email-validator.directive';
import { bookingRoutes, BookingRoutingModule } from './booking-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

// const routes: Routes = [
//   { path: '', component: BookingComponent }
// ];

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    DatePickerComponent,
    EmailValidatorDirective,
    MatDatepickerModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    // BookingRoutingModule,
    RouterModule.forChild(bookingRoutes)
  ],
})
export class BookingModule { }
