import { Component ,inject} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reservation-component',
  imports: [RouterOutlet],
  templateUrl: './reservation-component.component.html',
  styleUrl: './reservation-component.component.css'
})
export class ReservationComponentComponent {

 router = inject(Router)

  bookingform(){
    this.router.navigate(["/client/reservation/bookings"])
  } 
update(){
    this.router.navigate(["/client/reservation/update"])
  }

  cancel(){
    this.router.navigate(["/client/reservation/cancel"])
  }
  

}
