import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { roomData, RoomDataInterface } from '../roomsData';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-book-rooms-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-rooms-comp.component.html',
  styleUrl: './book-rooms-comp.component.scss'
})
export class BookRoomsCompComponent implements OnInit {
  public currRoom!: RoomDataInterface
  public roomId: Observable<number> = this.activatedRoute.params.pipe(
    map(val => Number(val['id']))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      const foundRoom = roomData.find(obj => obj?.roomNumber == param['id'])
      if (!foundRoom) {
        this.router.navigateByUrl('/rooms')
        throw new Error(`Room with ID ${param['id']} not found`)
      }
      this.currRoom = foundRoom
    })
    this.activatedRoute.paramMap.subscribe(
      param => console.log(param.get('id'))
    )
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'))
  }
}
