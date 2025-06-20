export  interface SignUp {
    name : string;
    surname : string;
    email : string;
    password : string;
 }
    export interface Role {
    id : number;
    message : string;
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
     
    // cancelStatus:string;
   
    
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

   export interface Name{
    name:string;
   }




   
    export interface Car {
   name:string;
   picture:string;
   seater:number;
   status:string ;
   

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
   

 } 
 

 export interface CarName {
  name:string
 }



 
