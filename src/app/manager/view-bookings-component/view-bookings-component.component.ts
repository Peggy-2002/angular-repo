import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { RouterOutlet } from '@angular/router';
import { BookingForm } from '../../model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-view-bookings-component',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './view-bookings-component.component.html',
  styleUrl: './view-bookings-component.component.css'
})
<<<<<<< HEAD
export class ViewBookingsComponentComponent {
  
=======
export class ViewBookingsComponentComponent implements OnInit {

  booking :BookingForm[] =[]
  constructor(private dataService : DataService){

  }

  ngOnInit(): void {
    this.dataService.getBookings().subscribe({
      next :(resData) =>{ this.booking = resData
       console.log(this.booking)
      }

    })
   
  }

  get bookings(){
    return this.booking
  }
>>>>>>> e3504d0e6a8b30920e6e19cfe411abfaf0fcc0f6
   

}
