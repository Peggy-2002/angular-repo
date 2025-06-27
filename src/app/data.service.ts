import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BookingForm, Complaints, SignUp } from "./model";
import { Role ,Form,Forms} from "./model";
import { Login ,Car ,Bookings,Cars,Booking ,ViewBookings} from "./model";
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
    cancelMessage='';
    returnCarMessage='';



    bookings:BookingForm[]=[];

    clientBooking!:BookingForm;
    forms:Form[]=[];
    car!:Cars
    bookingform!: Bookings;
    bookingforms!: Booking;
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

    get userName(): string {
        return this.role.name
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
            next:(resData) => {this.bookingMessage = resData.message
                console.log(this.bookingMessage)
            }
            
        });
     
        this.bookings.push(booking)
        
        
       

    }

    get message(){
    return this.bookingMessage;
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

    getBookings() : Observable<Forms[]>{
        
        return this.httpClient.get<Forms[]>("/api/viewbookings")

    }
     getBooking() : Observable<ViewBookings[]>{
        return this.httpClient.get<ViewBookings[]>("/api/viewbookings")

    }

    getbookings() : Observable<Booking[]>{
        return this.httpClient.get<Booking[]>("/api/viewbookings")

    }
     bookingByDriversLicense(license: number){
        this.httpClient.get<Booking>(`/api/bookings/${license}`).subscribe(response => {
            this.bookingforms =response;

        })

    }




    findBookingByDriversLicense(license: number){
        this.httpClient.get<Bookings>(`/api/bookings/${license}`).subscribe(response => {
            this.bookingform =response;

        })

    }

    get bookingss(){
        return this.bookingform
    }

getBookingByDriversLicense(license: number){
        this.httpClient.get<BookingForm>(`/api/bookings/${license}`).subscribe(response => {
            this.clientBooking =response;
            
            

        })

    }

    get clients(){
        return this.clientBooking
    }



    // getBooking(){
    //     return this.httpClient.get("/api/bookings")
    // }

    deleteBooking(bookingform :Bookings){
        
        this.httpClient.post<{'message':string}>("api/update-bookings",bookingform).subscribe( {
            next:(resData) => {this.cancelMessage = resData.message
                console.log(this.cancelMessage)

            }
        }

        )

    }

    get cancelMessages(){
        return this.cancelMessage
    }

    
 returnCar(bookingform :Booking){
    console.log(bookingform)
        
        this.httpClient.patch<{'message':string}>("api/returnCar",bookingform).subscribe( {
            next:(resData) => {this.returnCarMessage =resData.message
             console.log(this.returnCarMessage)
            }
        }

        )

    }

    get carMessages(){
        return this.returnCarMessage
    }



    getBookingss(){
        return this.bookingform

    }

    editBooking(license :number ,bookingform:BookingForm){
        console.log(license,bookingform)
        this.httpClient.put<{'message':string}>(`/api/editBooking/${license}` ,bookingform).subscribe({
            next:(resData) => this.updateMessage = resData.message
        })

        
    }

    get updatesMessage(){
        return this.updateMessage
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