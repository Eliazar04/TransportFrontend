import { Component, OnInit, inject } from '@angular/core';
import {CargoService} from '../../../services/cargo.service';
import { CommonModule, } from '@angular/common';
import { cargoM } from '../../../models/cargoModel';
import { TableModule } from 'primeng/table';

import {  Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import {  InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Navbar2Component } from '../../../main/navbar2/navbar2.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { TableComponent } from '../../shared/table/table.component';
@Component({
  selector: 'app-cargo',
  standalone: true,
  imports: [InputGroupModule,InputGroupAddonModule,TableModule,CommonModule,RouterModule,DialogModule,ButtonModule,Navbar2Component,TableComponent],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.css'
})

export default class cargoComponent implements OnInit {
  private dialogService!: DialogService;
  private cargoService=inject(CargoService);
  
  constructor(
  
    private router: Router,
  ){}
  cargos :cargoM[]=[];
  cols:any[]=[];
  name:string='cargos';
  display:boolean=false;
  icon1:string='pi pi-file-edit';
  icon2:string='pi pi-file-excel';
  ngOnInit(): void {
      this.cargoService.list()
      .subscribe(cargos=>{
        this.cargos=cargos;
        console.log(this.cargos)
      });
      this.cols=[{ field: 'id', header: 'ID' },
      { field: 'description', header: 'Descripcion' },
      { field: 'weight', header: 'Peso' },
      { field: 'dimensions', header: 'Dimensiones' },
    {field:'status',header:'Estado'}];
  }

  // eliminar 
  deleteCargo(id: number) {
    if (confirm('Are you sure you want to delete this cargo?')) {
      this.cargoService.delete(id).subscribe({
        next: () => {
          // Manejar el caso de éxito
          this.cargos = this.cargos.filter(cargo => cargo.id !== id);
        },
        error: (error) => {
          // Manejar el caso de error
          console.error('Error deleting cargo:', error);
        }
      });
    }
  }
  onEdit(item: any) {
    // Lógica para abrir el formulario de edición
    
    const id =item.id
    this.router.navigate(['/cargo/update/'+id]);
    
  }
}

