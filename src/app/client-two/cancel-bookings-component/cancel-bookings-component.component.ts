import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Forms, Bookings } from '../../model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-bookings-component',
  imports: [FormsModule],
  templateUrl: './cancel-bookings-component.component.html',
  styleUrl: './cancel-bookings-component.component.css'
})
export class CancelBookingsComponentComponent implements OnInit{
  constructor(private dataService:DataService){
  }
  router = inject(Router)

   booking!:Forms;
cancellationFee=''

ngOnInit(): void {
    this.dataService.getBookings().subscribe({
      next :(resData) =>{
     
    for(let i = 0 ; i  < resData.length;i++){

      if(resData[i].signUp !== null && this.userIds == resData[i].signUp.id){
        
        this.booking = resData[i]

        
      }
      
      
       
    }
    console.log(this.booking)
    
      }
      

    });
    
           
  }
get userIds(){
  return this.dataService.userId
}


get bookings(){
  return this.booking
}
deleteBooking(){
    
    
    this.dataService.deleteBooking({
      name :this.bookings.name,
      surname: this.bookings.surname,
      pickUpDate:this.bookings.pickUpDate,
      dropOfDate:this.bookings.dropOfDate,
      email :this.bookings.email,
      license: this.bookings.license,
      carName:this.booking.carName,
      cancellationFee:+this.cancellationFee


    })
this.router.navigate(["/client"])
  }
get cancelMessage(){
    
    return this.dataService.cancelMessages
  }

}





  


