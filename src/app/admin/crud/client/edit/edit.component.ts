
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { clientM } from '../../../models/clientModel';
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
  private client!:clientM
  private clientService=inject(ClientService);
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
      this.clientService.get(this.id)
      .subscribe(client=>{
        this.client=client;
        console.log(client);
        this.form.patchValue({
          name: client.name,
          email_address: client.email_address,
          phone:client.phone,
          address:client.address
          // otros campos según sea necesario
        });
      });
    


    });
  }


  // update
  save() {
    if (this.form.valid) {
      const  clientData :clientM= this.form.value;
      console.log(clientData);
      console.log('llegue')
      this.clientService.update(this.id,clientData).subscribe(() => {
        this.router.navigate(['/client']); // Redirigir a la página principal después de crear el conductor
      });
    }
  }


}
