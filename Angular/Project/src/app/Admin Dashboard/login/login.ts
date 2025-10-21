
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  adminId: string = '';
  password: string = '';

  onLogin() {
    if (!this.adminId || !this.password) {
      alert('Please enter both Admin ID and Password.');
      return;
    }

    // Dummy check — replace with real backend authentication later
    if (this.adminId === 'admin123' && this.password === 'admin@123') {
      alert('Login Successful!');
      // You can navigate to dashboard here if using router
      // this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid Admin ID or Password.');
    }
  }
}
