import { Routes } from '@angular/router';
import { Doctors } from './Admin Dashboard/doctors/doctors';
import { Staffs } from './Admin Dashboard/staff/staff';
import { ViewStatuses } from './Admin Dashboard/view-status/view-status';
import { Calendar } from './Doctor-Staff Dashboard/calendar/calendar';

export const routes: Routes = [
 // { path: 'doctors', component: Doctors },
  //{ path: 'staff', component: Staffs },
  //{ path: 'view-status', component: ViewStatuses },
  //{ path: '', redirectTo: 'doctors', pathMatch: 'full' }
   { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: Calendar },
];
