
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VehicleService } from '../../../../services/vehicle.service';
import { vehicleM } from '../../../../models/vehicleModel';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { Navbar2Component } from '../../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,InputGroupAddonModule,InputGroupModule,ButtonModule,Navbar2Component],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export  default class EditComponentVehicle implements OnInit {
  
  private id:number;
  private vehicle!:vehicleM
  private vehicleService=inject(VehicleService);
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    
    private route: ActivatedRoute,
    private router:Router
  ) { 
    // inicializar formulario
    this.id=0;
    this.form = this.fb.group({
      licence_plate: ['',Validators.required], // Asegura que el nombre tenga al menos 2 caracteres
      model: ['', Validators.required],
      year: [0, Validators.required],
      load_capacity: [0, [Validators.required]] // Asegura que sea un email válido
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Recuperar el id de los parámetros de la ruta
      console.log(this.id); // Imprimir el id en la consola
      this.vehicleService.get(this.id)
      .subscribe(vehicle=>{
        this.vehicle=vehicle;
        this.form.patchValue({
          licence_plate:vehicle.licence_plate,
          model:vehicle.model,
          year:vehicle.year,
          load_capacity:vehicle.load_capacity

          /////completar campos


          // otros campos según sea necesario
        });
      });
    


    });
  }


  // update
  save() {
    if (this.form.valid) {
      const  vehicleData :vehicleM= this.form.value;
     
      this.vehicleService.update(this.id,vehicleData).subscribe(() => {
        this.router.navigate(['/vehicle']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }


}
