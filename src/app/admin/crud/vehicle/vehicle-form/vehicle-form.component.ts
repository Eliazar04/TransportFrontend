import { Component, NgModule, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { VehicleService } from '../../../../services/vehicle.service';
import { Router, RouterModule } from '@angular/router';
import { vehicleM } from '../../../../models/vehicleModel';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { Navbar2Component } from '../../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,FormsModule,ReactiveFormsModule,RouterModule,ButtonModule,InputNumberModule,Navbar2Component
  ]
  ,
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.css'
})
export default class vehicleFormComponent {
  form: FormGroup;
  private vehicleService=inject(VehicleService);  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    
  ) {
    this.form = this.fb.group({
      licence_plate: ['',Validators.required], // Asegura que el nombre tenga al menos 2 caracteres
      model: ['', Validators.required],
      year: ['', Validators.required],
      load_capacity: ['', [Validators.required,Validators.min(0)]] // Asegura que sea un email válido
    });
  }

  create() {
    if (this.form.valid) {
      const  vehicleData :vehicleM= this.form.value;
      console.log(vehicleData);
      this.vehicleService.create(vehicleData).subscribe(() => {
        this.router.navigate(['/vehicle']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }
}


