import { Component, OnInit ,inject} from '@angular/core';
import { DataService } from '../../data.service';
import { RouterOutlet, Router} from '@angular/router';
import { BookingForm } from '../../model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-view-bookings-component',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './view-bookings-component.component.html',
  styleUrl: './view-bookings-component.component.css'
})
export class ViewBookingsComponentComponent implements OnInit {
  router = inject(Router);
click=false;
  booking :BookingForm[] =[]
  constructor(private dataService : DataService){

  }

  ngOnInit(): void {
    this.dataService.getBooking().subscribe({
      next :(resData) =>{ this.booking = resData
       console.log(this.booking)
      }

    })
   
  }

  get bookings(){
    return this.booking
  }
  

    remove(){
     this.click = false;
      this.booking =[];
      this.router.navigate(["/admin"])

    //  this.dataService.booking = [];
    // this.dataService.forms =[];
    
  }
  clicks(){
    this.click=true;
    

  }

}
