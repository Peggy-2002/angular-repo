import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Car } from '../../model';

@Component({
  selector: 'app-vehicle-component',
  imports: [],
  templateUrl: './vehicle-component.component.html',
  styleUrl: './vehicle-component.component.css'
})
export class VehicleComponentComponent implements OnInit {

  constructor(private dataService:DataService){

  }

  message="NO cars available for booking"

 car : Car[] = []

 newCar:Car[]=[]
 status ='Available';

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
