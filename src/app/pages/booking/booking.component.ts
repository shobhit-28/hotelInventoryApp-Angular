import { Component } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  constructor(
    private configService: ConfigService
  ) { }

}
