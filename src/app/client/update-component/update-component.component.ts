import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';
import { Car } from '../../model';

@Component({
  selector: 'app-update-component',
  imports: [FormsModule],
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.css'
})
export class UpdateComponentComponent implements OnInit{
  private dataService = inject(DataService);

  name= ''
  surname = ''
  carName = ''
  email = ''
  license = ''
  pickUpDate = ''
  dropOfDate =''

carNames:Car[]=[];
numbers:string[]=[];
finds=''
status ='Available';
carmessage='';


  findBookingByDriversLicence(){
    
    this.dataService.getBookingByDriversLicense(+this.license)
    const find = this.numbers.find((code) => code == this.license)!
     
     this.finds = find
     console.log(this.finds)
     
   
  }

  get messages():string{
    return this.finds

  }
  

  get getBooking(){
    return this.dataService.clients;
  }
  

  submitBooking(){
    if(this.carName){
     this.dataService.editBooking(+this.license,{
      name :this.name,
      surname: this.surname,
      email : this.email,
      license :this.license,
      pickUpDate :this.pickUpDate,
      dropOfDate : this.dropOfDate,
      carName :this.carName
    })
   
    }else{
      this.dataService.editBooking(+this.license,{
      name :this.name,
      surname: this.surname,
      email : this.email,
      license :this.license,
      pickUpDate :this.pickUpDate,
      dropOfDate : this.dropOfDate,
      carName :this.getBooking.carName
    })
    }
    this.carmessage = "Old car will be saved in your updated booking"
    

  }



  get message(){
    return this.dataService.updatesMessage
  }

ngOnInit(): void {
    this.dataService.getBookings().subscribe({
      next :(resData) =>{ 
        for(let i = 0; i<resData.length;i++){
          this.numbers.push(resData[i].license)

          }
          console.log(resData)
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

  



}
