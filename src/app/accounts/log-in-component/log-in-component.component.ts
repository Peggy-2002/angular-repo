import { Component,inject, OnInit } from '@angular/core';
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
export class LogInComponentComponent implements OnInit{
  constructor(private dataService : DataService){

  }
  router =inject(Router)
 
passwords:string[]=[];
  enteredemail ='';
  enteredpassword ='';
finds=''



  onSubmit(){
const find = this.passwords.find((code) => code == this.enteredpassword)!
   this.finds = find
   if(find){ 
 this.dataService.login({email : this.enteredemail,
   password: this.enteredpassword
   
 })
}

  }

ngOnInit(): void {
    
            this.dataService.getPassword().subscribe({
              next: (resData) => {
                
                for(let i =0 ;i < resData.length;i++){
                 this.passwords.push(resData[i].password)
                    


                  
                }
                console.log(this.passwords)
              }
              
                
                
            });
          }











}
 



