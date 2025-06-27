import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';
import {  RouterLink, Router,RouterOutlet } from '@angular/router';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-view-in-coming-bookings-component',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './view-in-coming-bookings-component.component.html',
  styleUrl: './view-in-coming-bookings-component.component.css'
})
export class ViewInComingBookingsComponentComponent {
 router =inject(Router);
click=false;
  constructor(private dataService:DataService){

  }


 

  get incomingbooking(){
    return this.dataService.incomingbookings
  }

  get incomingbookings(){
    return this.dataService.incomingbooking
    
  }

  remove(){
     this.click = false;
     this.dataService.bookings = [];
    this.dataService.forms =[];
    this.router.navigate(["/admin"])

    
  }
  clicks(){
    this.click=true;

  }
  

}
