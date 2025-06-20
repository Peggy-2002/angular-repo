import { Component,inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { Car } from '../model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   router = inject(Router)
car : Car[] = []
dropOfdate='';
pickUpdate='';

click=false;

message ="Enter values";



  createAcount(){
    this.router.navigate(["/account"])
      
  }

  login(){
    this.router.navigate(["/login"])
      
  }

  reservations(){
    this.router.navigate(["/reservations"])

  }
  // vehicles(){
  //   this.router.navigate(["/cars"])
    
  // }

  vehicles(){
    this.router.navigate(["/cars"])
    
  }

  contactUs(){
    this.router.navigate(["/contactUs"])
  }

  vehicle(){
    if(this.pickUpdate !== ''  && this.pickUpdate !== ''){
      this.router.navigate(["/vehicle"])
    }else{
      this.message;

    }
    this.click=true;
    
    
  }
  get messages(){

    return this.message
  }



}
