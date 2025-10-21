import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doctor-staff-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './doctor-staff-sidebar.html',
  styleUrls: ['./doctor-staff-sidebar.css']
})
export class DoctorStaffSidebar {
  sidebarOpen = false;
  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  closeSidebar() { this.sidebarOpen = false; }
}
