
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DriverService } from '../../../services/driver.service';
import { driverM } from '../../../models/driverModel';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { Navbar2Component } from '../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,InputGroupAddonModule,InputGroupModule,ButtonModule,Navbar2Component],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export  default class EditComponent implements OnInit {
  
  private id:number;
  private driver!:driverM
  private driverService=inject(DriverService);
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    
    private route: ActivatedRoute,
    private router:Router
  ) { 
    // inicializar formulario
    this.id=0;
    this.form = this.fb.group({
      name: ['',Validators.required], // Asegura que el nombre tenga al menos 2 caracteres
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email_address: ['', [Validators.required ,Validators.email]] // Asegura que sea un email válido
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Recuperar el id de los parámetros de la ruta
      console.log(this.id); // Imprimir el id en la consola
      this.driverService.get(this.id)
      .subscribe(driver=>{
        this.driver=driver;
        console.log(driver);
        this.form.patchValue({
          name: driver.name,
          email_address: driver.email_address,
          phone:driver.phone,
          address:driver.address
          // otros campos según sea necesario
        });
      });
    


    });
  }


  // update
  save() {
    if (this.form.valid) {
      const  driverData :driverM= this.form.value;
      
      this.driverService.update(this.id,driverData).subscribe(() => {
        this.router.navigate(['/driver']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }


}
