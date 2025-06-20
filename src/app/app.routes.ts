import { Routes } from '@angular/router';
import { AccountComponentComponent } from './accounts/account-component/account-component.component';
import { LogInComponentComponent } from './accounts/log-in-component/log-in-component.component';
import { AddCarComponentComponent } from './manager/add-car-component/add-car-component.component';
import { ManagerComponentComponent } from './manager-component/manager-component.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReservationsComponentComponent } from './client/reservations-component/reservations-component.component';
import { BookingFormComponentComponent } from './client/booking-form-component/booking-form-component.component';
import { ViewInComingBookingsComponentComponent } from './admin/view-in-coming-bookings-component/view-in-coming-bookings-component.component';
import { BookingdetailsComponentComponent } from './admin/bookingdetails-component/bookingdetails-component.component';
import { ReservationComponentComponent } from './client-two/reservation-component/reservation-component.component';
import { BookingComponentComponent } from './client-two/booking-component/booking-component.component';
import { CancelBookingComponentComponent } from './client/cancel-booking-component/cancel-booking-component.component';
import { BookingDetailComponentComponent } from './admin/booking-detail-component/booking-detail-component.component';
import { AdminReservationsCompoonentComponent } from './admin/admin-reservations-compoonent/admin-reservations-compoonent.component';
import { AdminBookingComponentComponent } from './admin/admin-booking-component/admin-booking-component.component';

import { CarsComponent } from './manager/cars/cars.component';
import { RemoveCarComponentComponent } from './manager/remove-car-component/remove-car-component.component';
import { ContactUsComponentComponent } from './client/contact-us-component/contact-us-component.component';
import { ContactComponentComponent } from './client/contact-component/contact-component.component';
import { QuestionsComponentComponent } from './client/questions-component/questions-component.component';
import { UpdateComponentComponent } from './client/update-component/update-component.component';
import { ReturnCarComponentComponent } from './admin/return-car-component/return-car-component.component';
import { UpdateCarComponentComponent } from './manager/update-car-component/update-car-component.component';
import { ViewBookingsComponentComponent } from './manager/view-bookings-component/view-bookings-component.component';
import { BookingsDetailsComponentComponent } from './manager/bookings-details-component/bookings-details-component.component';
import { ViewComplaintsComponentComponent } from './admin/view-complaints-component/view-complaints-component.component';
import { ComplaintsDetailsComponentComponent } from './admin/complaints-details-component/complaints-details-component.component';
import { VehicleComponentComponent } from './client/vehicle-component/vehicle-component.component';


export const routes: Routes = [
{
    path:"",
    component:HeaderComponent,
    children:[
       {
         path:'login',
        component:LogInComponentComponent,
          

        },
        {
        path:'account',
        component:AccountComponentComponent
        },

       {
        path:'reservations',
        component:ReservationsComponentComponent,
        children:[
              {
                path:'booking',
                component:BookingFormComponentComponent
              },
              {
                 
                 path:'cancel',
                 component:CancelBookingComponentComponent 
                                
              },

              {
                path:'update',
                component:UpdateComponentComponent

              }
           ]
        },
        // {
        //     path:'cars',
        //     component:CarsComponent

        // },
        {
            path:'contactUs',
            component:ContactUsComponentComponent,
            // children:[
            //     {
            //         path:'contact',
            //         component:ContactComponentComponent
            //     },

            //     {
            //         path:'questions',
            //         component:QuestionsComponentComponent
            //     }
            // ]
        }


    ]
},{
                
                 path:'manager',
                 component:ManagerComponentComponent,
                children:[
                    {
                        path:'addCar',
                        component:AddCarComponentComponent

                    },
                    {
                        path:'car',
                        component:CarsComponent
                    },

                    {
                        path:'remove',
                        component:RemoveCarComponentComponent
                    },

                    {
                        path:'updates',
                        component:UpdateCarComponentComponent
                    },

                    {
                        path:'viewbookings',
                        component:ViewBookingsComponentComponent,
                        children:[{
                            
                                path:':names/bookingsdetails',
                                 component:BookingsDetailsComponentComponent
                             
                        }
                    ]
                    }

                    

                 ]

    },

            {
                      path:'client',
                      component:ClientComponentComponent,
                      children:[
                        {
                             path:'reservation',
                             component:ReservationComponentComponent,
                             children:[
                                {
                                   path:'bookings',
                                    component:BookingComponentComponent 
                                },

                                {
                                    path:'cancel',
                                    component:CancelBookingComponentComponent
                                },

                                {
                                      path:'update',
                                      component:UpdateComponentComponent

                                }
                                
                                    
                                


                             ]
                        }

                      ]
            },

            {
                path:'admin',
                component:AdminComponentComponent,
                children:[
                    {
                        path:'viewIncomingBookings',
                        component:ViewInComingBookingsComponentComponent,
                         children:[
                             {
                                path:':name/viewInComingBookingDetails',
                                 component:BookingdetailsComponentComponent
                             },

                             {
                            
                                path:':names/viewInComingBookingDetail',
                                 component:BookingDetailComponentComponent
                             
                             }
                         ]
                        },

                         {
                            path:'viewComplaints',
                            component:ViewComplaintsComponentComponent,
                            children:[{
                                path:':names/viewComplaintsdetails',
                                component:ComplaintsDetailsComponentComponent
                            }
                        ]
                         },
                     
                     {
                        path:'reservations',
                        component:AdminReservationsCompoonentComponent,
                        children:[
                            {
                              
                                path:'book',
                                component:AdminBookingComponentComponent
                            },
                            {
                                path:'cancels',
                                component:CancelBookingComponentComponent
                            },
                            {
                                path:'update',
                                component:UpdateComponentComponent
                                
                            }
                        ]
                     },

                     {
                        path:'return',
                        component:ReturnCarComponentComponent
                     },

                     {
                        path:'viewbooking',
                        component:ViewBookingsComponentComponent
                     }
                 ]
             },

             
                 {
                    path:'contact',
                    component:ContactComponentComponent
                },

                {
                    path:'questions',
                    component:QuestionsComponentComponent
                },

                
              {
            path:'cars',
            component:CarsComponent

        },
        {
            path:'vehicle',
            component:VehicleComponentComponent
        }

    ];


   


    
   