import { Component, NgModule, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { FloatLabelModule } from 'primeng/floatlabel';




import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ClientService } from '../../../../services/client.service';
import { Router, RouterModule } from '@angular/router';
import { clientM } from '../../../../models/clientModel';
import { ButtonModule } from 'primeng/button';
import { Navbar2Component } from '../../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,FormsModule,ReactiveFormsModule,RouterModule,ButtonModule,Navbar2Component,FloatLabelModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export default class clientFormComponent {
  form: FormGroup;
  private clientService=inject(ClientService);  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required], // Asegura que el nombre tenga al menos 2 caracteres
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email_address: ['', [Validators.required ,Validators.email]] // Asegura que sea un email válido
    });
  }

  create() {
    if (this.form.valid) {
      const  clientData :clientM= this.form.value;
      console.log(clientData);
      this.clientService.create(clientData).subscribe(() => {
        this.router.navigate(['/client']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }
}


