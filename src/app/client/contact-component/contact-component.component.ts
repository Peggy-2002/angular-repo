import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent {
  router = inject(Router)
  click=false;

  constructor(private dataService:DataService){

  }
name='';
surname='';
phoneNumber='';
message='';



onSubmit(){
  this.dataService.addComplaint({
    name:this.name,
    surname:this.surname,
    phoneNumber:+this.phoneNumber,
    message:this.message,
  })
  this.click = true;
}

get messages(){
  return this.dataService.complaintMessage
}




  back(){
    this.router.navigate(["/"]);
  }

}
