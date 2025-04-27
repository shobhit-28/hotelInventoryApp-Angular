import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsListCompComponent } from './rooms-list-comp/rooms-list-comp.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BookRoomsCompComponent } from './book-rooms-comp/book-rooms-comp.component';
import { AddNewRoomComponent } from './add-new-room/add-new-room.component';
import { RouteConfigToken } from '../../services/routeConfig/route-config.service';

export const routesForRooms: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list', component: RoomsComponent, children: [
      { path: 'details/:id', component: BookRoomsCompComponent }
    ]
  },
  { path: 'add', component: AddNewRoomComponent },
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
