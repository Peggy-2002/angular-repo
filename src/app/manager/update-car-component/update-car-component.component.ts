import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-car-component',
  imports: [FormsModule],
  templateUrl: './update-car-component.component.html',
  styleUrl: './update-car-component.component.css'
})
export class UpdateCarComponentComponent {
  constructor(private dataService : DataService){
  
    }
    click = true;
    clicks = true;

  names='';

    name="";
    picture='';
    seater='';
    status='';
  
    getCar(){
      console.log(this.names)
      this.dataService.searchCar(this.names)
      this.click =false;
  
  
    }
  
    get printCar(){
      return this.dataService.viewCar
  
    }
  
    updateCar(){
      this.dataService.updateCar({name:this.name,
              picture:this.picture,
              seater:+this.seater,
              status:this.status,
              id:this.printCar.id,
              
      })
      this.clicks=false;
      
    }
    get carMessages(){

      return this.dataService.updateCars
    }
  
  
  
}
