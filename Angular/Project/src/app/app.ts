import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Cards } from './cards/cards';
import { Login } from './Admin Dashboard/login/login';
import { Sidebar } from './Admin Dashboard/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required when using 'imports'
  imports: [Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Correct property name
})
export class App {
  protected readonly title = signal('Project');
}
