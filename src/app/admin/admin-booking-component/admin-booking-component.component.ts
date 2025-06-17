import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { CarName } from '../../model';
@Component({
  selector: 'app-admin-booking-component',
  imports: [FormsModule],
  templateUrl: './admin-booking-component.component.html',
  styleUrl: './admin-booking-component.component.css'
})
export class AdminBookingComponentComponent {

  constructor(private dataService : DataService){
  
    }
  
    carNames:CarName[]=[
      {
        name :'Peggy',
      },
      {
        name:'Dudu',
      },
      {
        name: 'Thabo',
  
      },
  
      {
        name :'Jabu',
      }
  
    ];
  
    name='';
    surname='';
    email='';
    license='';
    dropOfDtae='';
    pickUpDate='';
    carName='';
  
    
  
       onSubmit(){
  
        this.dataService.booking({
       name:this.name,
       surname : this.surname,
        email : this.email,
        license : this.license,
       dropOfDate: this.dropOfDtae,
        pickUpDate : this.pickUpDate,
        carName : this.carName,
        
      
        })
      }
      

}
