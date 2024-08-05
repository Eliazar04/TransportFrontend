import { Component, OnInit, inject } from '@angular/core';
import {DriverService} from '../../../services/driver.service';
import { CommonModule, } from '@angular/common';
import { driverM } from '../../../models/driverModel';
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
  selector: 'app-driver',
  standalone: true,
  imports: [TableModule,CommonModule,TableComponent,RouterModule,DialogModule,ButtonModule,Navbar2Component, InputGroupAddonModule, InputGroupModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})

export default class DriverComponent implements OnInit {
  private dialogService!: DialogService;
  private driverService=inject(DriverService);
  
  constructor(
  
    private router: Router,
  ){}
  drivers :driverM[]=[];
  cols:any[]=[];
  name:string='drivers';
  display:boolean=false;
  icon1:string='pi pi-user-edit';
  icon2:string='pi pi-user-minus';
  ngOnInit(): void {
      this.driverService.list()
      .subscribe(drivers=>{
        this.drivers=drivers;
      });
      this.cols=[{ field: 'id', header: 'ID' },
      { field: 'name', header: 'nombre' },
      { field: 'address', header: 'direccion' },
      { field: 'phone', header: 'telefono' },
    {field:'email_address',header:'correo'}];
  }

  // eliminar 
  deleteDriver(id: number) {
    if (confirm('Are you sure you want to delete this driver?')) {
      this.driverService.delete(id).subscribe({
        next: () => {
          // Manejar el caso de éxito
          this.drivers = this.drivers.filter(driver => driver.id !== id);
        },
        error: (error) => {
          // Manejar el caso de error
          console.error('Error deleting driver:', error);
        }
      });
    }
  }
  onEdit(item: any) {
    // Lógica para abrir el formulario de edición
    
    const id =item.id
    this.router.navigate(['/driver/update/'+id]);
    
  }
}

