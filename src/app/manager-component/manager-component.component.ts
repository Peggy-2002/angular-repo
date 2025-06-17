import { Component,inject} from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { AddCarComponentComponent } from '../manager/add-car-component/add-car-component.component';

@Component({
  selector: 'app-manager-component',
  imports: [RouterOutlet],
  templateUrl: './manager-component.component.html',
  styleUrl: './manager-component.component.css'
})
export class ManagerComponentComponent {
  router = inject(Router)
  




  addCar(){
  this.router.navigate(["/manager/addCar"])
  
      
  }

  logOut(){
    this.router.navigate(["/"]);
  }
   vehicles(){
    this.router.navigate(["/manager/car"]);
  }
  remove(){
    this.router.navigate(["/manager/remove"])

  }

  update(){
    this.router.navigate(["/manager/updates"])

  }

  viewBookings(){
     this.router.navigate(["/manager/viewbookings"])
  }

}
