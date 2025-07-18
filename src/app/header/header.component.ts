import { Component,inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { Car } from '../model';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   router = inject(Router)
car : Car[] = []
dropOfdate='';
pickUpdate='';
message='';
click=false;

messageses="SORRY! NO cars available today for booking"
   newCar:Car[]=[]
   
   status ='Available';



constructor(private dataService:DataService){

}


  createAcount(){
    this.router.navigate(["/account"])
      
  }

  login(){
    this.router.navigate(["/login"])
      
  }

  reservations(){
    this.router.navigate(["/reservations"])

  }


  vehicles(){
    this.router.navigate(["/cars"])
    
  }

  contactUs(){
    this.router.navigate(["/contactUs"])
  }

  vehicle(){
    this.click=true;
    if(this.pickUpdate !== ''  && this.pickUpdate !== '' ){
      this.router.navigate(["/vehicle"])
    
    }else{
    this.message ="Can't find cars please enter dates";

    }
    
    
  }

  get messages(){
    return this.message
  }

  
      ngOnInit(): void {
    
            this.dataService.getCars().subscribe({
              next: (resData) => {
                for(let i =0 ;i < resData.length;i++){
                  if(resData[i].status === this.status){
                    this.newCar.push(resData[i])

                  }
                }
                 console.log(this.newCar)
              },
              error:(err) => {
                console.error("Failed to lad cars",err)
              }
                
            });

             
     
      }
get cars(){
        return this.newCar;
      }







}
