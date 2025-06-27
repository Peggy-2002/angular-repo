import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { CarName ,Car} from '../../model';

@Component({
  selector: 'app-booking-form-component',
  imports: [FormsModule],
  templateUrl: './booking-form-component.component.html',
  styleUrl: './booking-form-component.component.css'
})
export class BookingFormComponentComponent implements OnInit{

  constructor(private dataService : DataService){

  }
  status ='Available';

  carNames:Car[]=[
    

  ];

  name='';
  surname='';
  email='';
  license='';
  dropOfDtae='';
  pickUpDate='';
  carName='';




  


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

      this.dataService.booking({
     name:this.name,
     surname : this.surname,
      email : this.email,
      license : this.license,
     dropOfDate: this.dropOfDtae,
      pickUpDate : this.pickUpDate,
      carName : this.carName,

      
    
    });

    
  
    
  }
  get message(){
    return this.dataService.bookingMessages
  }


    

  }

    
    
    
    
    

   

  

  
  
  


 
   



  
  


