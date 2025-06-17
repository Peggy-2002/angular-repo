import { Component,inject } from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { ClientComponentComponent } from '../../client-component/client-component.component';
import { AdminComponentComponent } from '../../admin-component/admin-component.component';
import { ManagerComponentComponent } from '../../manager-component/manager-component.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-in-component',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './log-in-component.component.html',
  styleUrl: './log-in-component.component.css'
})
export class LogInComponentComponent {
  constructor(private dataService : DataService){

  }
  router =inject(Router)
 

  enteredemail ='';
  enteredpassword ='';



  onSubmit(){
 this.dataService.login({email : this.enteredemail,
   password: this.enteredpassword
   
 })
}
}
 



