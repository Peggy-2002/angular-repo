import { Component, OnInit } from '@angular/core';
import { Car } from '../../model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-cars',
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {

  constructor(private dataService : DataService){
      
    }

  car : Car[] = []

  ngOnInit(): void {
    
            this.dataService.getCars().subscribe({
              next: (resData) => {this.car = resData;
                console.log(this.car)
              },
              error:(err) => {
                console.error("Failed to lad cars",err)
              }
                
            });

             
     
      }

      get cars(){
        return this.car
      }

  

}
