import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Car } from '../../model';
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
  carNames:Car[]=[
      
  
    ];

  name='';
  surname='';
  email='';
  license='';
  dropOfDtae='';
  pickUpDate='';
  carName='';



  
  status ='Available';


  ngOnInit(): void {
    
            this.dataService.getCars().subscribe({
              next: (resData) => {
                
                for(let i =0 ;i < resData.length;i++){
                  if(resData[i].status === this.status){
                    this.carNames.push(resData[i])
                    
                  }
                }
              }
                
                
            });

             
     
      }





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



