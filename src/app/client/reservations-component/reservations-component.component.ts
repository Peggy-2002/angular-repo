import { Component,inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reservations-component',
  imports: [RouterOutlet],
  templateUrl: './reservations-component.component.html',
  styleUrl: './reservations-component.component.css'
})
export class ReservationsComponentComponent {
  router = inject(Router)

  bookingform(){
    this.router.navigate(["/reservations/booking"])
  }
  cancelBooking(){
    this.router.navigate(["reservations/cancel"])

  }
 update(){
    this.router.navigate(["reservations/update"])

  }


}
