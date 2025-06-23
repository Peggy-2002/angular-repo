import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BookingForm, Complaints, SignUp } from "./model";
import { Role ,Form} from "./model";
import { Login ,Car ,Name,Cars,Booking } from "./model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({providedIn:"root"}) 

export class DataService {
    private httpClient = inject(HttpClient);
    router = inject(Router)


    signUpMessage ='';
    role!:Role
    addCarMessage ='';
    
    bookingMessage = '';
    bookingMessages = '';
    notifications= 0;

    deleteCarMessage='';
    updateMessage='';
    complaintMessages='';


    bookings :BookingForm[]=[];
    forms:Form[]=[];
    car!:Cars
    bookingform!: Booking;
    complaintNotifications :Complaints[]=[];
    
     




    


    client: string = 'Client';
    manager : string = 'Manager';
    admin : string = 'Admin';

    onSubmit(signUp :SignUp){
        
        this.httpClient.post<{"message" : string}>("/api/signUp",signUp).subscribe({
            next:(resData) => this.signUpMessage = resData.message
        });
        
        console.log(this.signUpMessage)
    
    }

    get signUpMessages(){
    return this.signUpMessage
    
}

login(log : Login){
     this.httpClient.post<Role>("/api/login",log).subscribe({
         next:(res) => {
            this.role = res
             if(this.manager === res.message) {
                  this.router.navigate(["/manager"])
                } else if (this.admin === res.message){
                    this.router.navigate(["/admin"])

                }else{
                    this.router.navigate(["/client"])
                }
            
        } 
     });
 }

     get userId() : number {
        return this.role.id;
        
       
    }

     cars(cars:Car){
         
        this.httpClient.post<{"message" : string}>("/api/addCar",cars).subscribe({
            next:(resData) => this.addCarMessage = resData.message
        });


    }

    get addCarMessages(){
        return this.addCarMessage
    }

    getCars():Observable<Car[]>{
        return this.httpClient.get<Car[]>("/api/getCars")
        
        
    }

    viewCars(){
       this.getCars() .subscribe({
              next: (resData) => console.log(resData)});
                
        
    }
    searchCar(name:string){
        this.httpClient.get<Cars>(`/api/searchCar/${name}`).subscribe({
            next:(resData) => this.car = resData
        });

    }

    get viewCar(){
        return this.car;
    }

    removeCar(name:string){
        this.httpClient.delete<{'message' :string}>(`/api/removeCar/${name}`).subscribe({
            next:(resData) => this.deleteCarMessage = resData.message
        });

    }

    get carMessage(){
        return this.deleteCarMessage;
    }

    updateCar(car:Cars){
       this.httpClient.patch<{'message' :string}>(`/api/updateCar`,car).subscribe({
            next:(resData) => this.updateMessage = resData.message
        }); 

    }
    get updateCars(){
        return this.updateMessage;
    }


    


    booking(booking :BookingForm){
        console.log(booking)
        

        this.httpClient.post<{'message':string}>("/api/booking",booking).subscribe({
            next:(resData) => this.bookingMessage = resData.message
        });
    
        this.bookings.push(booking)
        
        console.log(this.bookings)

    }

   



    get notification(){
        return this.bookings.length + this.forms.length;
    }

    get incomingbookings(){
        return this.bookings
    }

    get incomingbooking(){
        return this.forms
    }
    

     form(booking :Form){
        

        this.httpClient.post<{'message':string}>("/api/bookings",booking).subscribe({
            next:(resData) => this.bookingMessages = resData.message
        });
        this.forms.push(booking)
         
        
        
        

    }

    getBookings() : Observable<Form[]>{
        return this.httpClient.get<Form[]>("/api/viewbookings")

    }

    // findBookingByDriversLicense(license: number){
    //     this.httpClient.get<BookingForm>(`/api/bookings/${license}`).subscribe(response => {
    //         this.bookingform =response;

    //     })

    // }
findBookingByDriversLicense(license: number){
        this.httpClient.get<Booking>(`/api/bookings/${license}`).subscribe(response => {
            this.bookingform =response;

        })

    }



    getBooking(){
        return this.httpClient.get("/api/bookings")
    }

    deleteBooking(bookingform :BookingForm){
        // this.bookingform.cancelStatus="booking deleted"
        this.httpClient.post<{'message':string}>("api/update-bookings",bookingform).subscribe( {
            next:(resData) => console.log(resData)
        }

        )

    }
 returnCar(bookingform :Booking){
        // this.bookingform.cancelStatus="booking deleted"
        this.httpClient.patch<{'message':string}>("api/returnCar",bookingform).subscribe( {
            next:(resData) => console.log(resData)
        }

        )

    }



    getBookingss(){
        return this.bookingform

    }

    editBooking(license :number ,bookingform:BookingForm){
        this.httpClient.put(`/api/editBooking/${license}` ,bookingform).subscribe()
        // alert("bookings updated")
    }

     addComplaint(complaint :Complaints){
        this.httpClient.post<{'message':string}>("api/addComplaint",complaint).subscribe( {
            next:(resData) => this.complaintMessages = resData.message
        }

        )
        this.complaintNotifications.push(complaint)

    }

    get complaintMessage(){
        return this.complaintMessages;
    }
    get complaintNotification(){
        return this.complaintNotifications.length;
    }


     getComplaints() : Observable<Complaints[]>{
        return this.httpClient.get<Complaints[]>("/api/viewComplaints")

    }

    
       
    
}