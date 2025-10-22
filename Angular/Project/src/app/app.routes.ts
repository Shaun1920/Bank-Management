import { Routes } from '@angular/router';
import { Doctors } from './Admin Dashboard/doctors/doctors';
import { Staffs } from './Admin Dashboard/staff/staff';
import { ViewStatuses } from './Admin Dashboard/view-status/view-status';
import { Calendar } from './Doctor-Staff Dashboard/calendar/calendar';
import { UserRegist } from './user-regist/user-regist';

export const routes: Routes = [

  //Admin-Dashboard

 //{ path: 'doctors', component: Doctors },
 //{ path: 'staff', component: Staffs },
 // { path: 'view-status', component: ViewStatuses },
  //{ path: '', redirectTo: 'doctors', pathMatch: 'full' }

//Doctor&Staff Dashboard
  //{ path: '', redirectTo: 'calendar', pathMatch: 'full' },
  //{ path: 'calendar', component: Calendar },


  { path: 'register', component: UserRegist },
  { path: '', redirectTo: 'register', pathMatch: 'full' }

];
