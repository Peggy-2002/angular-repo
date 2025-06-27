export  interface SignUp {
    name : string;
    surname : string;
    email : string;
    password : string;
 }
    export interface Role {
    id : number;
    message : string;
    name: string;
 }

 export interface Login {
   email : string;
   password : string;
 }

 export  interface BookingForm {
    name : string;
    surname : string;
    email : string;
    license : string;
    carName : string;
    dropOfDate :string;
    pickUpDate : string;
     
    
   
    
   }

export  interface Bookings {
    name : string;
    surname : string;
    email : string;
    license : string;
    carName : string;
    dropOfDate :string;
    pickUpDate : string;
    cancellationFee:number;
    
   }





   
export  interface Booking{
    name : string;
    surname : string;
    email : string;
    license : string;
    carName : string;
    dropOfDate :string;
    pickUpDate : string;
    condition:string;
    time:string;
    damagedFee:number;
    delayedFee:number;
    
   
    
   }

   export interface ViewBookings {
   name : string;
    surname : string;
    email : string;
    license : string;
    carName : string;
    dropOfDate :string;
    pickUpDate : string;
    condition:string;
    time:string;
    damagedFee:number;
    delayedFee:number;
    cancellationFee:number;
    status:string;
    returned:string;

   }


   


   export  interface Form {
    name : string;
    surname : string;
    email : string;
    license : string;
    carName : string;
    dropOfDate :string;
    pickUpDate : string;
    signUp:{
      id : number;
    }
   
    
   }
export  interface Forms {
    name : string;
    surname : string;
    email : string;
    license : string;
    carName : string;
    dropOfDate :string;
    pickUpDate : string;
    condition:string;
    time:string;
    damagedFee:number;
    delayedFee:number;
    cancellationFee:number;
    status:string;
    returned:string; 
    signUp:{
      id : number;
      name : string;
    surname : string;
    email : string;
    password : string;
    }
   
    
   }






   export interface Name{
    name:string;
   }




   
    export interface Car {
   name:string;
   picture:string;
   seater:number;
   status:string ;
   price:number;
   

 } 

 export interface Complaints{
  name:string;
  surname:string;
  phoneNumber: number;
  message:string;
 }
 
export interface Cars {
   name:string;
   picture:string;
   seater:number;
   status:string ;
   id:number;
   price:number
   

 } 
 

 export interface CarName {
  name:string
 }

 



 
