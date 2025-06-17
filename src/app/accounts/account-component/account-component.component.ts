import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-account-component',
  imports: [FormsModule],
  templateUrl: './account-component.component.html',
  styleUrl: './account-component.component.css'
})
export class AccountComponentComponent {
  constructor(private dataService :DataService){

  }

  name='';
  surname='';
  email='';
  password='';
  

   onSubmit(){
    this.dataService.onSubmit({name:this.name,
    surname:this.surname,
    email:this.email,
    password:this.password
  });
  console.log(
    this.name,
   this.surname,
    this.email,
    this.password 
  )
  
}

get signUpMessage() {
      return this.dataService.signUpMessages
      
   
  }

}
