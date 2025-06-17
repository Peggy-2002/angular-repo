import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-bookings-component',
  imports: [RouterOutlet],
  templateUrl: './view-bookings-component.component.html',
  styleUrl: './view-bookings-component.component.css'
})
export class ViewBookingsComponentComponent {
  constructor(private dataService : DataService){

  }
   

}
