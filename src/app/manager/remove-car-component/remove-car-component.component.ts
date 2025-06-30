import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-remove-car-component',
  imports: [FormsModule],
  templateUrl: './remove-car-component.component.html',
  styleUrl: './remove-car-component.component.css'
})
export class RemoveCarComponentComponent implements OnInit{
  constructor(private dataService : DataService){

  }
  click = true;
  clicks = true;

  name =""
  names :string[]=[]
   naming =''
    

   
 
  
    ngOnInit(): void {
      this.dataService.getCars().subscribe({
        next :(resData) =>{
          for(let i=0; i<resData.length;i++){
            
            
         this.names.push(resData[i].name) 
    }
    
        
        }
        
  
      })
      console.log(this.names)




      
     
    }


    



    get bookings(){
      return this.names
      
    }






  getCar(){
    console.log(this.name)
    this.dataService.searchCar(this.name)
    this.click =false;
    const find = this.names.find((finds) => finds == this.name)!
      this.naming = find
      


  }
get car(){
      return this.naming
    }



  get printCar(){
    return this.dataService.viewCar

  }

  removeCar(){
    this.dataService.removeCar(this.printCar.name)
    this.clicks
    
  }
  get carMessages(){
    return this.dataService.carMessage
  }

}
