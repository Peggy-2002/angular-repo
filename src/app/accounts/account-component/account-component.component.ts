import { Component, OnInit ,inject} from '@angular/core';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-component',
  imports: [FormsModule],
  templateUrl: './account-component.component.html',
  styleUrl: './account-component.component.css'
})
export class AccountComponentComponent implements OnInit{
  constructor(private dataService :DataService){

  }
   router = inject(Router)

  name='';
  surname='';
  email='';
  password='';
  passwords:string[]=[];
  finds=''
  

   onSubmit(){
   const find = this.passwords.find((code) => code == this.password)!
   this.finds = find
   if(find == undefined){ 
    this.dataService.onSubmit({name:this.name,
    surname:this.surname,
    email:this.email,
    password:this.password
  });
}
this.router.navigate(["/"]);

     console.log(this.finds)
     
  
}

get signUpMessage() {
      return this.dataService.signUpMessages
      
   
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
