import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsListCompComponent } from './rooms-list-comp/rooms-list-comp.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BookRoomsCompComponent } from './book-rooms-comp/book-rooms-comp.component';
import { AddNewRoomComponent } from './add-new-room/add-new-room.component';
import { RouteConfigToken } from '../../services/routeConfig/route-config.service';
import { roomGuard } from '../../guards/roomGuard/room.guard';
import { bookingRoutes } from '../booking/booking-routing.module';
import { bookingFormFieldsResolver } from '../booking/resolvers/booking-form-fields.resolver';
import { loginGuardMatch } from '../../guards/loginGuard/canMatch/login.guard';
import { loginGuard } from '../../guards/loginGuard/canActivate/login.guard';

export const routesForRooms: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'booking/:id',
    loadChildren: () => import('../../pages/booking/booking.module').then(m => m.BookingModule),
    resolve: { fields: bookingFormFieldsResolver },
    canActivate: [loginGuard], canMatch: [loginGuardMatch],
  },
  {
    path: 'list', component: RoomsComponent,
    canActivateChild: [roomGuard],
    children: [
      { path: 'details/:id', component: BookRoomsCompComponent },
      { path: 'add', component: AddNewRoomComponent }
    ]
  },
]

@NgModule({
  declarations: [RoomsComponent, RoomsListCompComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(routesForRooms)
  ],
  exports: [RoomsComponent],
  providers: [
    { provide: RouteConfigToken, useValue: { title: 'Room' } }
  ]
})
export class RoomsModule { }
