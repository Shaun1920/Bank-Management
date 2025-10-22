import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Cards } from './cards/cards';
import { Login } from './Admin Dashboard/login/login';
import { Sidebar } from './Admin Dashboard/sidebar/sidebar';
import { DoctorStaffSidebar } from './Doctor-Staff Dashboard/doctor-staff-sidebar/doctor-staff-sidebar';
import { UserRegist } from './user-regist/user-regist';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required when using 'imports'
  imports: [RouterOutlet,UserRegist],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Correct property name
})
export class App {
  protected readonly title = signal('Project');
}


//DoctorStaffSidebar
//Login
//Sidebar
//Cards