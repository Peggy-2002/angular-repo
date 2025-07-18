import { Component, OnInit ,inject} from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { CarName ,Car} from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form-component',
  imports: [FormsModule],
  templateUrl: './booking-form-component.component.html',
  styleUrl: './booking-form-component.component.css'
})
export class BookingFormComponentComponent implements OnInit {
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
      this.router.navigate(["/"])
        console.log(this.finds)
        
      }

get message():string{
    return this.finds

  }


get messages(){
    return this.dataService.message
    
  }

  

      

}
  
    
    
    
    

   

  

  
  
  


 
   



  
  


