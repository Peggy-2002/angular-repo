import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-cancel-booking-component',
  imports: [FormsModule],
  templateUrl: './cancel-booking-component.component.html',
  styleUrl: './cancel-booking-component.component.css'
})
export class CancelBookingComponentComponent {

  private dataService = inject(DataService);

  name =''
  surname =''
  emal =''
  pick_up_date =''
  drop_of_date= ''
  payment =''
  license =''








  findBookingByDriversLicence(){
    this.dataService.findBookingByDriversLicense(+this.license)

  }

  deleteBooking(){
    console.log('deleted clicked')
    console.log(this.license)
    this.dataService.deleteBooking({
      name :this.getBooking.name,
      surname: this.getBooking.surname,
      pickUpDate:this.getBooking.pickUpDate,
      dropOfDate:this.getBooking.dropOfDate,
      email :this.getBooking.email,
      license: this.getBooking.license,
      carName:this.getBooking.carName


    })

  }

  get getBooking(){
    return this.dataService.bookingform;
  }
}
