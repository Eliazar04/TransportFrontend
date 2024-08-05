import { Component, OnInit, inject } from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import { CommonModule, } from '@angular/common';
import { vehicleM } from '../../../models/vehicleModel';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../../shared/table/table.component';
import {  Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Navbar2Component } from '../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [TableModule,CommonModule,TableComponent,RouterModule,DialogModule,ButtonModule,InputGroupModule,InputGroupAddonModule,Navbar2Component],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})

export default class vehicleComponent implements OnInit {
  private dialogService!: DialogService;
  private vehicleService=inject(VehicleService);
  
  constructor(
  
    private router: Router,
  ){}
  vehicles :vehicleM[]=[];
  cols:any[]=[];
  name:string='vehicles';
  display:boolean=false;
  icon1:string='pi pi-wrench';
  icon2:string='pi pi-trash';
  ngOnInit(): void {
      this.vehicleService.list()
      .subscribe(vehicles=>{
        this.vehicles=vehicles;
      });
      this.cols=[{ field: 'id', header: 'ID' },
      { field: 'licence_plate', header: 'placa' },
      { field: 'model', header: 'modelo' },
      { field: 'year', header: 'Año' },
    {field:'load_capacity',header:'Capacidad'}];
  }

  // eliminar 
  deleteVehicle(id: number) {
    if (confirm('Are you sure you want to delete this vehicle?')) {
      this.vehicleService.delete(id).subscribe({
        next: () => {
          // Manejar el caso de éxito
          this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        },
        error: (error) => {
          // Manejar el caso de error
          console.error('Error deleting vehicle:', error);
        }
      });
    }
  }
  onEdit(item: any) {
    // Lógica para abrir el formulario de edición
    
    const id =item.id
    this.router.navigate(['vehicle/update/'+id]);
    
  }
}

