import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-regist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-regist.html',
  styleUrls: ['./user-regist.css']
})
export class UserRegist {
  user = {
    name: '',
    email: '',
    contact: '',
    age: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('User Registered:', this.user);
    alert('Registration successful!');
  }
}
