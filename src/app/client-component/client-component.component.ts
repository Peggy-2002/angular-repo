import { Component ,inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-client-component',
  imports: [RouterOutlet],
  templateUrl: './client-component.component.html',
  styleUrl: './client-component.component.css'
})
export class ClientComponentComponent {
  router = inject(Router)
  click = true;

  reservations(){
    this.router.navigate(["/client/reservation"])

  }

  logOut(){
    this.router.navigate(["/"]);
  }

}
