import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsListCompComponent } from './rooms-list-comp/rooms-list-comp.component';



@NgModule({
  declarations: [RoomsComponent, RoomsListCompComponent],
  imports: [
    CommonModule
  ],
  exports: [RoomsComponent]
})
export class RoomsModule { }
