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
    clicks = false;

  name='';

    names="";
    picture='';
    seater='';
    status='';
    price =''
    naming :string[]=[]
  
    getCar(){
      console.log(this.names)
      this.dataService.searchCar(this.name)
      this.click =false;
      this.clicks = true;
  
  
    }
    
  
    ngOnInit(): void {
      this.dataService.getCars().subscribe({
        next :(resData) =>{
          for(let i=0; i<resData.length;i++){
        this.naming.push(resData[i].name) 
    }
    
        
        }
        
  
      })
      console.log(this.names)
     
    }
    get bookings(){
      return this.naming
      
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
              price:+this.price
              
      })
      this.clicks=false;
      
    }
    get carMessages(){

      return this.dataService.updateCars
    }
    
  
  
  
}
