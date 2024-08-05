import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_URL = 'http://localhost:8080/users/login';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.httpClient.post<any>(this.LOGIN_URL, { username, password }).pipe(
      tap(response => {
        if (response) {
          console.log('Login successful:', response);
          // Puedes manejar la respuesta aquí según lo que devuelva tu backend
          // Por ejemplo, podrías guardar el token JWT si el backend lo devuelve
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error); // Puedes manejar el error aquí o propagarlo hacia arriba
      })
    );
  }

  logout() {
    // Implementa tu lógica de logout si es necesario
    // Por ejemplo, podrías llamar a un endpoint de logout en el backend si existe
    this.router.navigate(['/login']);
  }
}
