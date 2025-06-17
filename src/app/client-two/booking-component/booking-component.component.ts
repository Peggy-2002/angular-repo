import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { CarName } from '../../model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-component',
  imports: [FormsModule],
  templateUrl: './booking-component.component.html',
  styleUrl: './booking-component.component.css'
})
export class BookingComponentComponent {

  constructor(private dataService:DataService){

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

      this.dataService.form({
     name:this.name,
     surname : this.surname,
      email : this.email,
      license : this.license,
     dropOfDate: this.dropOfDtae,
      pickUpDate : this.pickUpDate,
      carName : this.carName,
      signUp:{
        id:this.userId,
      }
      
   
 });
  }

   get userId(){
      return this.dataService.userId
    }

}



