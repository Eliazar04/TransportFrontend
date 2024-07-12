import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  username: string = '';
  password: string = '';
  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/internal']); // Redirige al componente principal si el login es exitoso
      },
      error => {
        console.error('Login error:', error);
        this.loginInvalid = true; // Muestra el mensaje de error si el login es inválido
      }
    );
  }
}
