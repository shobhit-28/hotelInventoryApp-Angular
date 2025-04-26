import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';


const routes: Routes = [
  { path: '', component: BookingComponent }
];

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
