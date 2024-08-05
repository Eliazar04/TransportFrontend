import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {
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
