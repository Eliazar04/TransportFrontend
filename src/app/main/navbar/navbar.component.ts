//import { Component } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router,
  ) {};

  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lógica para cambiar la clase cuando se haga scroll
    this.isScrolled = window.scrollY > 0;
  }

  toggleMobileMenu() {
    // Lógica para alternar el estado del menú móvil
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openLogin() {
    this.router.navigate(["/login"])
  }

}
