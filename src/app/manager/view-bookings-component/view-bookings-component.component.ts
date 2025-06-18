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
   

}
