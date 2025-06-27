import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model';

@Component({
  selector: 'app-add-car-component',
  imports: [FormsModule],
  templateUrl: './add-car-component.component.html',
  styleUrl: './add-car-component.component.css'
})
export class AddCarComponentComponent implements OnInit{

  constructor(private dataService : DataService) {

  }

  click=true;

  
  name ='';
  picture = '';
  status = '';
  seaters = '';
  price= ''


  //  booking :Car[] =[]
   names :string[]=[
    
    

   ]
  //   constructor(private dataService : DataService){
  
  //   }
  
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



  onSubmit(){

    
    this.dataService.cars({
    name : this.name,
    picture : this.picture,
    seater: +this.seaters,
    status:this.status,
    price:+this.price
    });
    this.click =false
    console.log(this.name,this.picture,this.seaters,this.status)

  }


  get addCarMessage(){
    return this.dataService.addCarMessages
  }

}
