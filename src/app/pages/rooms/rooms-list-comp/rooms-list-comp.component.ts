import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomDataInterface } from '../roomsData';
import _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-rooms-list-comp',
  standalone: false,
  templateUrl: './rooms-list-comp.component.html',
  styleUrl: './rooms-list-comp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListCompComponent implements OnChanges {
  @Input() Rooms: Array<RoomDataInterface> = new Array();
  @Input() title: string = 'Table'
  @Output() selectedRoomEmitter = new EventEmitter<RoomDataInterface>();

  constructor(
    private router: Router
  ) {}

  private obj1 = {a: 1, b: 2, c:{a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: 2}}}}}}}}}
  private obj2 = {a: 1, b: 2, c:{a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: {a: 1, b: 1}}}}}}}}}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(_.isEqual(this.obj1, this.obj2))
    if (changes['title']) {
      this.title = changes?.['title'].currentValue.toUpperCase()
    }
  }

  selectRoom(room: RoomDataInterface) {
    // this.selectedRoomEmitter.emit(room)
    this.router.navigateByUrl(`rooms/details/${room?.roomNumber}`)
  }
}
