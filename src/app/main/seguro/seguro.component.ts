import { Component, NgModule, OnInit,inject } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { driverM } from '../../models/driverModel';
import { Navbar2Component } from '../navbar2/navbar2.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-seguro',
  standalone: true,
  imports: [Navbar2Component, CommonModule,CommonModule ,FormsModule,ReactiveFormsModule],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.css'
})
export default class SeguroComponent implements OnInit {
  private serDriver=inject(DriverService)
  drivers:driverM[]=[];
  driversWithoutInsurance: driverM[] = [];
  selectedDriverId!: number ;



  constructor(private http: HttpClient) { }
  ngOnInit(): void {
      this.serDriver.list().subscribe(drivers=>{
        this.drivers=drivers ;
        this.driversWithoutInsurance = this.drivers.filter(driver => driver.seguro === 'no');})
      
  }

  asegurarDriver(): void {
    if (this.selectedDriverId) {
      
      
      const driver = this.drivers.find(d => d.id == this.selectedDriverId);
      if (driver) {
       
        const aseguramientoData = {
          DatosPersonal: [
            {
              Nombres: driver.name,
              Direccion: driver.address || '',  // Campo opcional
              Email: driver.email_address || '',  // Campo opcional
              Telefono: driver.phone,
              TipoSeguro: 'premiun'  // Valor fijo o puede ser dinámico si es necesario
            }
          ]
        };
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        console.log(aseguramientoData);/*
        this.http.post('https://clinic-service-tis.onrender.com/servicios/asegurarPersonal/', aseguramientoData, { headers }).subscribe(
          response => {
            driver.seguro = 'si';
            this.serDriver.update(driver.id,driver).subscribe(
              updateResponse => {
                console.log('Driver actualizado:', updateResponse);
                // Actualizar la lista de drivers sin seguro
                this.driversWithoutInsurance = this.drivers.filter(d => d.seguro === 'no');
        });
              
          },
          error => {
            console.error('Error al asegurar el driver:', error);
          }
        );
        */


      }
    }

}

}