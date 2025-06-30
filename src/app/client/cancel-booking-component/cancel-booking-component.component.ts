import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';
import { Bookings } from '../../model';

@Component({
  selector: 'app-cancel-booking-component',
  imports: [FormsModule],
  templateUrl: './cancel-booking-component.component.html',
  styleUrl: './cancel-booking-component.component.css'
})
export class CancelBookingComponentComponent implements OnInit {

  private dataService = inject(DataService);
  

  name =''
  surname =''
  email =''
  pick_up_date =''
  drop_of_date= ''
  carName=''
  license='';
  cancellationFee='';

  length =0;
  
  numbers:string[]=[];
  finds =''



  findBookingByDriversLicence(){
    
    this.dataService.findBookingByDriversLicense(+this.license)
    const find = this.numbers.find((code) => code == this.license)!
     
     this.finds = find
     
   
  }

  get messages():string{
    return this.finds

  }

  deleteBooking(){
    
    
    this.dataService.deleteBooking({
      name :this.getBooking.name,
      surname: this.getBooking.surname,
      pickUpDate:this.getBooking.pickUpDate,
      dropOfDate:this.getBooking.dropOfDate,
      email :this.getBooking.email,
      license: this.getBooking.license,
      carName:this.getBooking.carName,
      cancellationFee:+this.cancellationFee


    })

  }
ngOnInit(): void {
    this.dataService.getBookings().subscribe({
      next :(resData) =>{ 
        for(let i = 0; i<resData.length;i++){
          
          this.numbers.push(resData[i].license)

          }
          console.log(this.numbers)
        }
      

    });
    

   
  }

  
  




  get getBooking(){
    
    
     
     
    return this.dataService.bookingss;
    
  }

  get cancelMessage(){
    
    return this.dataService.cancelMessage
  }
}
