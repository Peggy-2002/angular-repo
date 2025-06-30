import { Component, OnInit ,inject} from '@angular/core';
import { Complaints } from '../../model';
import { DataService } from '../../data.service';
import { RouterLink,Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-complaints-component',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './view-complaints-component.component.html',
  styleUrl: './view-complaints-component.component.css'
})
export class ViewComplaintsComponentComponent implements OnInit{
  router =inject(Router);
  clicks = true;
clicking = false;
   booking :Complaints[] =[]
    constructor(private dataService : DataService){
  
    }
  
    ngOnInit(): void {
      this.dataService.getComplaints().subscribe({
        next :(resData) =>{ this.booking = resData
         console.log(this.booking)
        }
  
      })
     
    }
  
    get bookings(){
      return this.booking
    }

 remove(){
      this.clicking =false;
      localStorage.clear();
      this.clicks = false;
      this.dataService.complaintNotifications = [];
      this.booking =[];
      
      this.router.navigate(["/admin"])

    }

    click(){
      this.clicking =true;
    }
}
