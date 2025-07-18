import { Component,inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Car } from '../../model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-component',
  imports: [FormsModule],
  templateUrl: './booking-component.component.html',
  styleUrl: './booking-component.component.css'
})
export class BookingComponentComponent implements OnInit {

  constructor(private dataService:DataService){

  }
  router = inject(Router)
  carNames:Car[]=[];
  numbers:string[] =[];

  name='';
  surname='';
  email='';
  license='';
  dropOfDtae='';
  pickUpDate='';
  carName='';
finds='';


  
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
this.router.navigate(["/client"])

  }
get message():string{
    return this.finds

  }


  
get messages(){
    return this.dataService.bookingMessages
    
  }


   get userId(){
      return this.dataService.userId
    }

}



