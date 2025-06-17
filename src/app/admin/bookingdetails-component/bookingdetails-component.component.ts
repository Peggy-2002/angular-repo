import { Component ,Input} from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-bookingdetails-component',
  imports: [],
  templateUrl: './bookingdetails-component.component.html',
  styleUrl: './bookingdetails-component.component.css'
})
export class BookingdetailsComponentComponent {
  constructor(private dataService:DataService){

  }
  click = true;

   @Input() name!: string;
  //  @Input() names!:string;




  get incomingbooking(){
    return this.dataService.incomingbookings.find((d) => d.name === this.name)!
  }

  //  get incomingbookings(){
  //   return this.dataService.incomingbooking.find((d) => d.name === this.names)!
  // }


  //   remove(){
  //    this.click = false
  //    this.dataService.bookings = [];
  //   this.dataService.forms =[];
    
  // }
  
}
