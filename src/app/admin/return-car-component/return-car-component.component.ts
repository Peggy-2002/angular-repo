import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { BookingForm } from '../../model';

@Component({
  selector: 'app-return-car-component',
  imports: [FormsModule],
  templateUrl: './return-car-component.component.html',
  styleUrl: './return-car-component.component.css'
})
export class ReturnCarComponentComponent implements OnInit{
click=false;
booking :BookingForm[] =[]
  constructor(private dataService :DataService){

  }

  

  
  name ='';
  surname ='';
  email ='';
  pick_up_date ='';
  drop_of_date= '';
  carName='';
  condition='';
  time=''
  delayedFee='';
  damagedFee='';
  license ='';
numbers:string[]=[];
finds =''



   findBookingByDriversLicence(){
    
       this.dataService.bookingByDriversLicense(+this.license)
      
    
    const find = this.numbers.find((code) => code == this.license)!
     
     this.finds = find
     
   
  }

  get messages():string{
    return this.finds

  }
    
   

  



  ngOnInit(): void {
    this.dataService.getbookings().subscribe({
      next :(resData) =>{ this.booking = resData
       console.log(this.booking)
       for(let i = 0; i<resData.length;i++){
          
          this.numbers.push(resData[i].license)

          }
          console.log(this.numbers)
        }
      

    });
this.dataService.getCars().subscribe({
              next: (resData) => {
                console.log(resData)
              }
              
                
            });


   
  }

 returnCar(){
    
    this.dataService.returnCar({
      name :this.getBooking.name,
      surname: this.getBooking.surname,
      pickUpDate:this.getBooking.pickUpDate,
      dropOfDate:this.getBooking.dropOfDate,
      email :this.getBooking.email,
      license: this.getBooking.license,
      carName:this.getBooking.carName,
      condition:this.condition,
      time:this.time,
      delayedFee:+this.delayedFee,
      damagedFee:+this.damagedFee,



    });
   

  }

get getBooking(){
    return this.dataService.bookingforms;
  }

  get message(){
    return this.dataService.carMessages
  }
}
