import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent {
  router = inject(Router)
  back(){
    this.router.navigate(["/"]);
  }

}
