import { Component,inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-us-component',
  imports: [RouterOutlet],
  templateUrl: './contact-us-component.component.html',
  styleUrl: './contact-us-component.component.css'
})
export class ContactUsComponentComponent {
  router = inject(Router)

  

  //  contact(){
  //   this.router.navigate(["/contactUs/contact"])
  // }
   contact(){
    this.router.navigate(["/contact"])
  }

  questions(){
    this.router.navigate(["questions"])
  }

}
