import { Component, OnInit, inject } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import { CommonModule, } from '@angular/common';
import { clientM } from '../../../models/clientModel';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../../shared/table/table.component';
import {  Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { Navbar2Component } from '../../../main/navbar2/navbar2.component';
import {  InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [TableModule,CommonModule,TableComponent,RouterModule,DialogModule,ButtonModule,Navbar2Component, InputGroupAddonModule, InputGroupModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export default class ClientComponent implements OnInit {

  private clientService=inject(ClientService);
  
  constructor(
  
    private router: Router,
  ){}
  clients :clientM[]=[];
  cols:any[]=[];
  name:string='clients';
  display:boolean=false;
  icon1:string='pi pi-user-plus';
  icon2:string='pi pi-user-minus';
  ngOnInit(): void {
      this.clientService.list()
      .subscribe(clients=>{
        this.clients=clients;
      });
      this.cols=[{ field: 'id', header: 'ID' },
      { field: 'name', header: 'nombre' },
      { field: 'address', header: 'direccion' },
      { field: 'phone', header: 'telefono' },
    {field:'email_address',header:'correo'}];
  }

  // eliminar 
  deleteClient(id: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.delete(id).subscribe({
        next: () => {
          // Manejar el caso de éxito
          this.clients = this.clients.filter(client => client.id !== id);
        },
        error: (error) => {
          // Manejar el caso de error
          console.error('Error deleting client:', error);
        }
      });
    }
  }
  onEdit(item: any) {
    // Lógica para abrir el formulario de edición
    
    const id =item.id
    this.router.navigate(['client/update/'+id]);
    
  }
}

