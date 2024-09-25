import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public router: Router) {}

  onHome() {
    this.router.navigate(['/portfolio-website/home']);
  }

  onSkills() {
    const skillSection = document.getElementById('skills-section');
    if (skillSection) {
      skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // this.router.navigate(['/portfolio-website/home#skills-section']);
  }

  onAbout() {
    this.router.navigate(['/portfolio-website/about']);
  }

  onContact() {
    this.router.navigate(['/portfolio-website/contact']);
  }
}
