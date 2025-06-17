import { Component ,inject } from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-component',
  imports: [RouterOutlet],
  templateUrl: './admin-component.component.html',
  styleUrl: './admin-component.component.css'
})
export class AdminComponentComponent {
   click = true;
  router = inject(Router)

  constructor(private dataService : DataService){

  }

  get notifications(){
    return this.dataService.notification
    
  }
  

  onClick(){
      this.router.navigate(["/admin/viewIncomingBookings"])
      this.click = false;

    }

    logOut(){
    this.router.navigate(["/"]);
  }

  remove(){
     this.click = true;
     this.dataService.bookings = [];
    this.dataService.forms =[];
    
  }

  onClicks(){
      this.router.navigate(["/admin/reservations"])
      

    }

    return(){
      this.router.navigate(["/admin/return"])
    }


viewbookings(){
      this.router.navigate(["/admin/viewbooking"])
    }
}
