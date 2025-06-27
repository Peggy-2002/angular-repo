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
  click = false;
  router = inject(Router)
  clicks = false;
  clicking=false;
  clicked =false;
  clickedOn =false;

 

  constructor(private dataService : DataService){

  }

  get notifications(){
    
    
    return this.dataService.notification
    
    
  }
  

  onClick(){
    
      this.router.navigate(["/admin/viewIncomingBookings"])
      this.click =true;

    }

    logOut(){
    this.router.navigate(["/"]);
  }

  // remove(){
  //    this.click = false;
  //    this.dataService.bookings = [];
  //   this.dataService.forms =[];
    
  // }

  onClicks(){
    this.clicks = true;
      this.router.navigate(["/admin/reservations"])
      

    }

    return(){
      this.router.navigate(["/admin/return"])
      this.clickedOn =true;
    }


viewbookings(){
      this.router.navigate(["/admin/viewbooking"])
      this.clicked=true;

    }

    get complaintsNotification(){
     return this.dataService.complaintNotification
    }

    viewComplaints(){
      this.router.navigate(["/admin/viewComplaints"])
      this.clicking =true;
    }

    // removes(){
    //   this.clicking =false;
    //   this.dataService.complaintNotifications = [];
    // }
}
