import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsModule } from './pages/rooms/rooms.module';
import { InitService } from '../initService/init.service';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, AppNavComponent],
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
