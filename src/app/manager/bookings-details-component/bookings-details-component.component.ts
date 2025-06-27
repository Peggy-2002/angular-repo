import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../data.service';
import { BookingForm, ViewBookings } from '../../model';

@Component({
  selector: 'app-bookings-details-component',
  imports: [],
  templateUrl: './bookings-details-component.component.html',
  styleUrl: './bookings-details-component.component.css'
})
export class BookingsDetailsComponentComponent implements OnInit {

  @Input() names! :string

booking :ViewBookings[] =[]

  click = true;
  constructor(private dataService : DataService){

  }

  ngOnInit(): void {
    this.dataService.getBooking().subscribe({
      next :(resData) => this.booking = resData
    })
  }

  get bookings(){
    return this.booking.find((d) => d.name === this.names)!
  }
   
}
