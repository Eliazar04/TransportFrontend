
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

import { AbstractControl } from '@angular/forms';

import {  NgModule, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CargoService } from '../../../../services/cargo.service';
import { Router, RouterModule } from '@angular/router';
import { cargoM } from '../../../../models/cargoModel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { Navbar2Component } from '../../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [InputTextModule,InputNumberModule,InputGroupAddonModule,InputGroupModule,FormsModule,ReactiveFormsModule,RouterModule,ButtonModule,CommonModule,Navbar2Component],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export  default class EditComponentCargo implements OnInit {
  
  private id:number;
  private cargo!:cargoM
  private cargoService=inject(CargoService);
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    
    private route: ActivatedRoute,
    private router:Router
  ) { 
    // inicializar formulario
    this.id=0;
    this.form = this.fb.group({
      description: ['', Validators.required], // 
      weight: ['', Validators.required],
      dimensions: ['', Validators.required],
      status: ['', [Validators.required]] // 
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Recuperar el id de los parámetros de la ruta
      console.log(this.id); // Imprimir el id en la consola
      this.cargoService.get(this.id)
      .subscribe(cargo=>{
        this.cargo=cargo;
        console.log(cargo);
        this.form.patchValue({
          description: cargo.description,
          dimensions: cargo.dimensions,
          status: cargo.status,
          weight:cargo.weight
           // Asegura que sea un email válido
          // otros campos según sea necesario
        });
      });
    


    });
  }


  // update
  save() {
    if (this.form.valid) {
      const  cargoData :cargoM= this.form.value;
      
      this.cargoService.update(this.id,cargoData).subscribe(() => {
        this.router.navigate(['/cargo']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }
  negativeNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value < 0) {
      return { 'negativeNumber': true };
    }
    return null;
  }
  cancel() {
    // Redirigir a otra ruta, por ejemplo, la página principal
    this.router.navigate(['/cargo']);
  }
  get weightControl() {
    return this.form.get('weight');
  }

}
