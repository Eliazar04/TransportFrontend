import { Component } from '@angular/core';
// tracking.component.ts

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar2Component } from '../../main/navbar2/navbar2.component';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,Navbar2Component],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})


export default class TrackingComponent {
  cargoId: string = '';
  cargo: any;

  constructor(private http: HttpClient,private router:Router) {}

  fetchCargo() {
    this.http.get(`http://localhost:8080/cargos/${this.cargoId}`).subscribe(
      (data: any) => {
        this.cargo = data;
      },
      (error) => {
        console.error('Error fetching cargo data:', error);
      }
    );
  }
  volverCargo(){
    this.router.navigate(['/internal'])
  }
}
