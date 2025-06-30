import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model';


@Component({
  selector: 'app-update-car-component',
  imports: [FormsModule],
  templateUrl: './update-car-component.component.html',
  styleUrl: './update-car-component.component.css'
})
export class UpdateCarComponentComponent implements OnInit{
  constructor(private dataService : DataService){
  
    }
    

    name='';

    names="";
    picture='';
    seater='';
    status='';
    price =''

    naming :string[]=[];
    
    statuses ='Available';
  click = true;

    nami=''
    getCar(){
     
      this.dataService.searchCar(this.name)
     this.click = false;
   const find = this.naming.find((finds) => finds == this.name)!
      this.nami = find
  
    }
    get car(){
      return this.nami
    }
  
    ngOnInit(): void {
      this.dataService.getCars().subscribe({
        next :(resData) =>{
          for(let i=0; i<resData.length;i++){
            
            
         this.naming.push(resData[i].name) 
    }
        }
          
        
    
        
        });
      
     
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
      
      
    }
    get carMessages(){
      return this.dataService.updateCars
    }
    
  
  
  
}
