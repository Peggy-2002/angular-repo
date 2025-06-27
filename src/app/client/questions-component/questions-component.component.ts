import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-component',
  imports: [],
  templateUrl: './questions-component.component.html',
  styleUrl: './questions-component.component.css'
})
export class QuestionsComponentComponent {
  router = inject(Router)

  back(){
    this.router.navigate(["/"]);
  }

  

}
