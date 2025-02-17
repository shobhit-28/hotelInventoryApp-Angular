import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { roomData, RoomDataInterface } from './roomsData';
import { RoomsListCompComponent } from "./rooms-list-comp/rooms-list-comp.component";
import { RoomsService } from './service/rooms.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  Rooms = roomData
  selectedRoom!: RoomDataInterface;
  totalBytes: { uploaded: number, download: number } = { uploaded: 0, download: 0 };
  randomObj: { [k: string]: number } = {}

  constructor(
    private roomsService: RoomsService
  ) { }

  ngOnInit(): void {
    this.getPhotosFromService()
    this.setCookie('chuki', 'random_ass_cookie', 1)
  }
  selectedRooms(event: RoomDataInterface) {
    this.selectedRoom = event
  }
  setCookie(name: string, value: string, days: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration
    const cookieValue = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  }

  getPhotosFromService() {
    this.roomsService.getPhotos().subscribe((event) => {
      try {
        switch (event.type) {
          case HttpEventType.Sent:
            // console.log('request sent', event)
            break;

          case HttpEventType.User:
            // console.log('Who is using: ', event)
            break;
          case HttpEventType.ResponseHeader:
            // console.log('Response Header: ', event)
            break;
          case HttpEventType.DownloadProgress:
            this.totalBytes['download'] += event.loaded
            this.randomObj[event.loaded.toString()] = event.loaded
            // console.log('download: ', event)
            // console.log('download total: ', event.total)
            break;
          case HttpEventType.UploadProgress:
            this.totalBytes['uploaded'] += event.loaded
            // console.log('upload: ', event)
            break;
          case HttpEventType.Response:
            // console.log('API RESPONSE: ')
            // console.log(event)
            console.log('Download Total at Response:', this.totalBytes);
            break;

          default:
            break;
        }
      } catch (error) {
        console.error(error)
      }
    })
  }

  // getPhotosFromService() {
  //   this.roomsService.getPhotos().subscribe(data => console.log(data))
  // }

}
