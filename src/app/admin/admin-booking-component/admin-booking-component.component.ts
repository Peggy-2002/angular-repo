import { Component, inject } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';

import { Car } from '../../model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-booking-component',
  imports: [FormsModule],
  templateUrl: './admin-booking-component.component.html',
  styleUrl: './admin-booking-component.component.css'
})
export class AdminBookingComponentComponent {

  constructor(private dataService : DataService){
  
    }
    router = inject(Router)
  
    
     status ='Available';
    
      carNames:Car[]=[];
      numbers:string[] =[];
  
    name='';
    surname='';
    email='';
    license='';
    dropOfDate='';
    pickUpDate='';
    carName='';

    finds =''


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

      this.dataService.getBookings().subscribe({
      next :(resData) =>{ 
        for(let i = 0; i<resData.length;i++){
          this.numbers.push(resData[i].license)

          }
          console.log(this.numbers)
        }
        
      

    });
             
     
      }



  get licenses(){
    return this.numbers
  }






    
  
       onSubmit(){
     const find = this.numbers.find((code) => code == this.license)!
     this.finds = find
     console.log(find)
     if(this.finds == undefined){
        this.dataService.booking({
       name:this.name,
       surname : this.surname,
        email : this.email,
        license : this.license,
       dropOfDate: this.dropOfDate,
        pickUpDate : this.pickUpDate,
        carName : this.carName,
        
      
        })
      }
      this.router.navigate(["/admin"])
        console.log(this.finds)
        
      }

get message():string{
    return this.finds

  }


get messages(){
    return this.dataService.message
    
  }

  

      

}
