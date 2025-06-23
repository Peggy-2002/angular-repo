import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-return-car-component',
  imports: [FormsModule],
  templateUrl: './return-car-component.component.html',
  styleUrl: './return-car-component.component.css'
})
export class ReturnCarComponentComponent {

  constructor(private dataService :DataService){

  }
  name =''
  surname =''
  emal =''
  pick_up_date =''
  drop_of_date= ''
  carName=''
  condition=''
  returning=''
  time=''
  delayedFee=''
  damagedFee=''
  license =''

   findBookingByDriversLicence(){
    this.dataService.findBookingByDriversLicense(+this.license)

  }

 returnCar(){
    // console.log('deleted clicked')
    // console.log(this.license)
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
      returned:this.returning,
      delayedFee:+this.delayedFee,
      damagedFee:+this.damagedFee



    });

  }

get getBooking(){
    return this.dataService.bookingform;
  }
}
