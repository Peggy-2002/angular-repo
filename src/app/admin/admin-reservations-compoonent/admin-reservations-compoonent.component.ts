import { Component,inject } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-reservations-compoonent',
  imports: [RouterOutlet],
  templateUrl: './admin-reservations-compoonent.component.html',
  styleUrl: './admin-reservations-compoonent.component.css'
})
export class AdminReservationsCompoonentComponent {

  router = inject(Router)

  bookingform(){
    this.router.navigate(["admin/reservations/book"])
  }
  cancelBooking(){
    this.router.navigate(["/admin/reservations/cancels"])

  }

update(){
    this.router.navigate(["/admin/reservations/update"])

  }

}
