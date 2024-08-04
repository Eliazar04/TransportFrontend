import { Component, NgModule, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DriverService } from '../../../../services/driver.service';
import { Router, RouterModule } from '@angular/router';
import { driverM } from '../../../../models/driverModel';
import { ButtonModule } from 'primeng/button';
import { Navbar2Component } from '../../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [CommonModule,InputGroupAddonModule,InputGroupModule,FormsModule,ReactiveFormsModule,RouterModule,ButtonModule,Navbar2Component],
  templateUrl: './driver-form.component.html',
  styleUrl: './driver-form.component.css'
})
export default class DriverFormComponent {
  form: FormGroup;
  private driverService=inject(DriverService);  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required], // Asegura que el nombre tenga al menos 2 caracteres
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email_address: ['', [Validators.required,Validators.email]] // Asegura que sea un email válido
    });
  }

  create() {
    if (this.form.valid) {
      const  driverData :driverM= this.form.value;
      console.log(driverData);
      this.driverService.create(driverData).subscribe(() => {
        this.router.navigate(['/driver']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }
}


