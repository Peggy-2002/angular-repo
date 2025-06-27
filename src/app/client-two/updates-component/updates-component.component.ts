import { Component } from '@angular/core';
import { Forms } from '../../model';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model';

@Component({
  selector: 'app-updates-component',
  imports: [FormsModule],
  templateUrl: './updates-component.component.html',
  styleUrl: './updates-component.component.css'
})
export class UpdatesComponentComponent {

constructor(private dataService:DataService){
  }
  name='';
  surname ='';
  carName = '';
  email = '';
  license = '';
  pickUpDate = '';
  dropOfDate ='';

carNames:Car[]=[];

status ='Available';

   booking!:Forms;
cancellationFee=''

ngOnInit(): void {
    this.dataService.getBookings().subscribe({
      next :(resData) =>{
     
    for(let i = 0 ; i  < resData.length;i++){

      if(resData[i].signUp !== null && this.userIds == resData[i].signUp.id){
        
        this.booking = resData[i]

        
      }
      
      
       
    }
    
    
      }
      

    });

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
           
  
  

  submitBooking(){
    if(this.carName){
    this.dataService.editBooking(+this.bookings.license,{
      name :this.name,
      surname: this.surname,
      email : this.email,
      license :this.license,
      pickUpDate :this.pickUpDate,
      dropOfDate : this.dropOfDate,
      carName :this.carName
    })
  }else{
    this.dataService.editBooking(+this.bookings.license,{
      name :this.name,
      surname: this.surname,
      email : this.email,
      license :this.license,
      pickUpDate :this.pickUpDate,
      dropOfDate : this.dropOfDate,
      carName :this.bookings.carName
  })

  }
  console.log(this.name, this.surname,this.email,this.license,this.pickUpDate,this.dropOfDate)
}



  get message(){
    return this.dataService.updatesMessage
  }







get userIds(){
  return this.dataService.userId
}


get bookings(){
  return this.booking
}
}
