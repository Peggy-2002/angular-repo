import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-view-in-coming-bookings-component',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './view-in-coming-bookings-component.component.html',
  styleUrl: './view-in-coming-bookings-component.component.css'
})
export class ViewInComingBookingsComponentComponent {
 

  constructor(private dataService:DataService){

  }


 

  get incomingbooking(){
    return this.dataService.incomingbookings
  }

  get incomingbookings(){
    return this.dataService.incomingbooking
    
  }
  

}
