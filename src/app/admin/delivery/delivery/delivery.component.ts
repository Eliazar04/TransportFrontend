import { CommonModule, DatePipe } from '@angular/common';
import { Component, NgModule, OnInit ,inject} from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientService } from '../../../services/client.service';
import { clientM } from '../../../models/clientModel';
import { VehicleService } from '../../../services/vehicle.service';
import { CargoService } from '../../../services/cargo.service';
import { DriverService } from '../../../services/driver.service';
import { driverM } from '../../../models/driverModel';
import { vehicleM } from '../../../models/vehicleModel';
import { cargoM } from '../../../models/cargoModel';
import { RouteService } from '../../../services/route.service';
import { routeM } from '../../../models/routeModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Navbar2Component } from '../../../main/navbar2/navbar2.component';
@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule ,FormsModule,ReactiveFormsModule,Navbar2Component],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export default class DeliveryComponent implements OnInit {
  datet:Date;
  constructor(private http: HttpClient ,private router:Router) { 
    this.datet=new Date();  
  }
  private clientService=inject(ClientService);
  private driverService=inject(DriverService);
  private cargoService=inject(CargoService);
  private vehicleService=inject(VehicleService);
  private routeService=inject(RouteService)
   clients:clientM[]=[];
   drivers:driverM[]=[];
  cargos:cargoM[]=[];
  vehicles:vehicleM[]=[];
  routes:routeM[]=[];
  selectedClientId!: number;
  selectedDriverId!: number;
  selectedCargoId!: number;
  selectedVehicleId!: number;
  selectedRouteId!: number;
  
  
  ngOnInit(): void {
    this.clientService.list().subscribe(clients=>{
      this.clients=clients;
    });
    this.driverService.list().subscribe(drivers=>{
      this.drivers=drivers;
    });
    this.vehicleService.list().subscribe(vehicles=>{
      this.vehicles=vehicles;
    });
    this.cargoService.list().subscribe(cargos=>{
      this.cargos=cargos;
    })
    this.routeService.list().subscribe(routes=>{
      this.routes=routes;
    })

  }

  SelectIds(): void {
    console.log('ID del cliente seleccionado:', this.selectedClientId);
    console.log('ID del conductor seleccionado:', this.selectedDriverId);
    console.log('ID del cargo seleccionado:', this.selectedCargoId);
    console.log('ID del vehículo seleccionado:', this.selectedVehicleId);
    console.log('ID del route seleccionado:', this.selectedRouteId);

  }
  sendData() {
    const url = 'http://localhost:8080/deliverys';
    const data = {
      
        
        "client_id": this.selectedClientId,
        "vehicle_id": this.selectedVehicleId,
        "route_id": this.selectedRouteId,
        "cargo_id":this.selectedCargoId,
        "driver_id":this.selectedDriverId,
        "shipping_date":this.datet,

    };

    this.http.post(url, data).subscribe(
      response => {
        console.log('Success:', response);
        this.router.navigate(['/dl'])
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

