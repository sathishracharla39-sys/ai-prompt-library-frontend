import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],   // ✅ ADD RouterLink
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class App {

  // 🌙 Dark mode state
  isDark = false;

  constructor() {
    // Load saved theme
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark');
      this.isDark = true;
    }
  }

  // 🌙 Toggle function
  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}