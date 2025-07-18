
import { Component, OnInit,inject } from '@angular/core';
import { DataService } from '../../data.service';
import { Forms, Bookings } from '../../model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-cancel-component',
  imports: [FormsModule],
  templateUrl: './admin-cancel-component.component.html',
  styleUrl: './admin-cancel-component.component.css'
})
export class AdminCancelComponentComponent implements OnInit {

private dataService = inject(DataService);
router = inject(Router)
  

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
      this.router.navigate(["/admin"])
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
