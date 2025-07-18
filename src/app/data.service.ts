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
            next:(resData) => {  
                alert(resData.message)
            }
        });
        
        
    
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
            next:(resData) => {
                alert(resData.message)
            }
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
            next:(resData) =>{this.car = resData}
        });

    }

    get viewCar(){
        return this.car;
    }

    removeCar(name:string){
        this.httpClient.delete<{'message' :string}>(`/api/removeCar/${name}`).subscribe({
            next:(resData) =>{ 
                alert(resData.message)
            }
             
        });
     
    }

    get carMessage(){
        return this.deleteCarMessage;
    }

    updateCar(car:Cars){
       this.httpClient.patch<{'message' :string}>(`/api/updateCar`,car).subscribe({
            next:(resData) => {
                alert(resData.message)
            }
        }); 

    }
    get updateCars(){
        
        return this.updateMessage;
    }


    


    booking(bookings :BookingForm){
        
        console.log(bookings)

        this.httpClient.post<{'message':string}>("/api/booking",bookings).subscribe({
            next:(resData) => {
               alert(resData.message)
            }
            
        });
     
        this.bookings.push(bookings)
        this.save();
       
        
        
       

    }

    get message(){
    return this.bookingMessage;
    }

   



    get notification(){
        return this.bookings.length + this.forms.length;
    }

     constructor(){
    const bookingNotifications = localStorage.getItem('bookings');
    const bookingsNotification =localStorage.getItem('forms')
     const complaints =localStorage.getItem('complaintNotifications')
    if(bookingNotifications && bookingsNotification && complaints){
        this.bookings = JSON.parse(bookingNotifications)
         this.forms = JSON.parse(bookingsNotification)
         this.complaintNotifications = JSON.parse(complaints)
    }
}

private save(){
    localStorage.setItem('bookings',JSON.stringify(this.bookings));
     localStorage.setItem('forms',JSON.stringify(this.forms));
     localStorage.setItem('complaintNotifications',JSON.stringify(this.complaintNotifications))
}



    get incomingbookings(){
        return this.bookings
    }

    get incomingbooking(){
        return this.forms
    }
    

     form(forms :Form){
        

        this.httpClient.post<{'message':string}>("/api/bookings",forms).subscribe({
            next:(resData) => {alert(resData.message)}
        });
        this.forms.push(forms)
        this.save();
         
        
        
        

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
     getPassword() : Observable<SignUp[]>{
        return this.httpClient.get<SignUp[]>("/api/passwords")

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



    
    deleteBooking(bookingform :Bookings){
        
        this.httpClient.post<{'message':string}>("api/update-bookings",bookingform).subscribe( {
            next:(resData) => {
                alert(resData.message)

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
            next:(resData) => {
                alert(resData.message)
             
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
            next:(resData) => {alert(resData.message)}
        })

        
    }

    get updatesMessage(){
        return this.updateMessage
    }

     addComplaint(complaint :Complaints){
        this.httpClient.post<{'message':string}>("api/addComplaint",complaint).subscribe( {
            next:(resData) => {alert(resData.message)}
        }

        )
        this.complaintNotifications.push(complaint)
        this.save();

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