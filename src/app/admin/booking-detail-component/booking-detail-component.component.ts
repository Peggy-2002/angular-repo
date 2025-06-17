import { Component ,Input} from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-booking-detail-component',
  imports: [],
  templateUrl: './booking-detail-component.component.html',
  styleUrl: './booking-detail-component.component.css'
})
export class BookingDetailComponentComponent {


  @Input() names!:string;

  click= true;

  constructor(private dataService:DataService){

  }

  

   
   

  get incomingbooking(){
    return this.dataService.incomingbooking.find((d) => d.name === this.names)!
  }

 
}
