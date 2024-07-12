import { Component, NgModule, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CargoService } from '../../../services/cargo.service';
import { Router, RouterModule } from '@angular/router';
import { cargoM } from '../../../models/cargoModel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { Navbar2Component } from '../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-cargo-form',
  standalone: true,
  imports: [InputTextModule,InputNumberModule,InputGroupAddonModule,InputGroupModule,FormsModule,ReactiveFormsModule,RouterModule,ButtonModule,CommonModule,Navbar2Component],
  templateUrl: './cargo-form.component.html',
  styleUrl: './cargo-form.component.css'
})
export default class cargoFormComponent {
  form: FormGroup;
  private cargoService=inject(CargoService);  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required], // 
      weight: [null, [Validators.required,Validators.min(0)]],
      dimensions: ['', Validators.required],
      status: ['', [Validators.required]] //
       
    });
  }

  create() {
    if (this.form.valid) {
      const  cargoData :cargoM= this.form.value;
      console.log(cargoData);
      this.cargoService.create(cargoData).subscribe(() => {
        this.router.navigate(['/cargo']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }
}


