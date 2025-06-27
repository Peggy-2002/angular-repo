import { Component,Input, OnInit} from '@angular/core';
import { Complaints } from '../../model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-complaints-details-component',
  imports: [],
  templateUrl: './complaints-details-component.component.html',
  styleUrl: './complaints-details-component.component.css'
})
export class ComplaintsDetailsComponentComponent implements OnInit {
   @Input() names! :string

booking :Complaints[] =[]

  clicking = true;
  constructor(private dataService : DataService){

  }

  ngOnInit(): void {
    this.dataService.getComplaints().subscribe({
      next :(resData) => {this.booking = resData
        console.log(this.booking)
      }
    })
    
    
  }

  get bookings(){
    return this.booking.find((d) => d.name === this.names)!
  }
   
}



