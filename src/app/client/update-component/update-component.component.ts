import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-update-component',
  imports: [FormsModule],
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.css'
})
export class UpdateComponentComponent {
  private dataService = inject(DataService);

  name= ''
  surname = ''
  carName = ''
  emal = ''
  license = ''
  pickUpDate = ''
  dropOfDate =''
  

  submitBooking(){
    this.dataService.editBooking(+this.license,{
      name :this.name,
      surname: this.surname,
      email : this.emal,
      license :this.license,
      pickUpDate :this.pickUpDate,
      dropOfDate : this.dropOfDate,
      carName :this.carName
    })

  }

}
