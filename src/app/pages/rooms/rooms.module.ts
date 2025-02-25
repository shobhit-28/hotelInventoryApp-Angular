import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsListCompComponent } from './rooms-list-comp/rooms-list-comp.component';
import { Routes } from '@angular/router';
import { BookRoomsCompComponent } from './book-rooms-comp/book-rooms-comp.component';

export const routesForRooms: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: RoomsComponent},
  {path: 'details/:id', component: BookRoomsCompComponent},
]

@NgModule({
  declarations: [RoomsComponent, RoomsListCompComponent],
  imports: [
    CommonModule
  ],
  exports: [RoomsComponent]
})
export class RoomsModule { }
