import { Component, OnInit } from '@angular/core';
import { CommonPagesModuleModule } from '../../common-pages-module.module';
import { addNewRoom, RoomDataInterface } from '../roomsData';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export type newRoomInterface = Omit<RoomDataInterface, 'roomCheckinTime' | 'roomCheckoutTime'> & { roomCheckinTime: string, roomCheckoutTime: string }

@Component({
  selector: 'hinv-add-new-room',
  standalone: true,
  imports: [CommonPagesModuleModule],
  templateUrl: './add-new-room.component.html',
  styleUrl: './add-new-room.component.scss'
})
export class AddNewRoomComponent {
  private defaultRoomData: newRoomInterface = {
    roomNumber: null!,
    roomType: null!,
    roomPrice: null!,
    roomAmenities: null!,
    roomCheckinTime: new Date().toISOString().slice(0, 16),
    roomCheckoutTime: new Date().toISOString().slice(0, 16),
  }

  public newRoom: newRoomInterface = JSON.parse(JSON.stringify(this.defaultRoomData))

  public formsInputFieldsArr: ReadonlyArray<{
    displayName: string,
    fieldFormName: keyof RoomDataInterface,
    type: 'text' | 'number' | 'datetime-local'
  }> = Object.freeze([
    {
      displayName: 'Room Number',
      fieldFormName: 'roomNumber',
      type: 'number',
    }, {
      displayName: 'Room Type',
      fieldFormName: 'roomType',
      type: 'text'
    }, {
      displayName: 'Room Price',
      fieldFormName: 'roomPrice',
      type: 'number',
    }, {
      displayName: 'Room Amenities',
      fieldFormName: 'roomAmenities',
      type: 'text'
    }, {
      displayName: 'Room Checkin Time',
      fieldFormName: 'roomCheckinTime',
      type: 'datetime-local'
    }, {
      displayName: 'Room Checkout Time',
      fieldFormName: 'roomCheckoutTime',
      type: 'datetime-local'
    }
  ])

  constructor(private router: Router) { }

  addNewRoom(formGroup: NgForm) {
    let isValid: boolean = true;
    for (const objKey of Object.keys(this.newRoom) as Array<keyof newRoomInterface>) {
      if (this.newRoom[objKey] == null) {
        isValid = false
      }
    }
    if (isValid) {
      this.createNewRoom()
      alert('New Room created')
      this.router.navigateByUrl('/rooms/list')
      formGroup.resetForm(this.defaultRoomData)
    }
  }

  createNewRoom() {
    addNewRoom({
      ...this.newRoom,
      roomCheckinTime: new Date(this.newRoom.roomCheckinTime),
      roomCheckoutTime: new Date(this.newRoom.roomCheckoutTime),
    })
  }
}
