import { Component,inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { Car } from '../model';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   router = inject(Router)
car : Car[] = []



  createAcount(){
    this.router.navigate(["/account"])
      
  }

  login(){
    this.router.navigate(["/login"])
      
  }

  reservations(){
    this.router.navigate(["/reservations"])

  }
  vehicles(){
    this.router.navigate(["/cars"])
    
  }

  contactUs(){
    this.router.navigate(["/contactUs"])
  }



}
