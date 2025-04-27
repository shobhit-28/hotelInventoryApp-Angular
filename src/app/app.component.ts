import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { RoomsModule } from './pages/rooms/rooms.module';
import { InitService } from '../initService/init.service';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { filter, map } from 'rxjs';

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
    private initService: InitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event)
    // })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd),
      map((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log(event ? 'Navigation Started' : 'Navigation Completed')
    })
    console.log(this.initService.initFunc())
    console.log(this.initService.config)
  }
}
