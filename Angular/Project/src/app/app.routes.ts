import { Routes } from '@angular/router';
import { Doctors } from './Admin Dashboard/doctors/doctors';
import { Staffs } from './Admin Dashboard/staff/staff';
import { ViewStatuses } from './Admin Dashboard/view-status/view-status';

export const routes: Routes = [
  { path: 'doctors', component: Doctors },
  { path: 'staff', component: Staffs },
  { path: 'view-status', component: ViewStatuses },
  { path: '', redirectTo: 'doctors', pathMatch: 'full' }
];
