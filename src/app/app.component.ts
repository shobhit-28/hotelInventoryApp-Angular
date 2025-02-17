import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsModule } from './pages/rooms/rooms.module';
import { InitService } from '../initService/init.service';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RoomsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotelInventoryApp';
  constructor(
    private initService: InitService
  ){}

  ngOnInit(): void {
    console.log(this.initService.initFunc())
    console.log(this.initService.config)
  }
}
