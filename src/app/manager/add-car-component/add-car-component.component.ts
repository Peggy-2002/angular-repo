import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car-component',
  imports: [FormsModule],
  templateUrl: './add-car-component.component.html',
  styleUrl: './add-car-component.component.css'
})
export class AddCarComponentComponent {

  constructor(private dataService : DataService){

  }

  click=true;

  
  name ='';
  picture = '';
  status = '';
  seaters = 0;



  onSubmit(){
    this.dataService.cars({
    name : this.name,
    picture : this.picture,
    seater: +this.seaters,
    status:this.status,
    });
    this.click =false
    console.log(this.name,this.picture,this.seaters,this.status)

  }


  get addCarMessage(){
    return this.dataService.addCarMessages
  }

}
