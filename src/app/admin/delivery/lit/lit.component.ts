import { Component, NgModule, OnInit } from '@angular/core';
import { DataService } from '../../../services/delivery';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { deliveryM } from '../../../models/deliveryModel';

@Component({
  selector: 'app-lit',
  standalone: true,
  imports: [FormsModule,TableModule,CommonModule],
  templateUrl: './lit.component.html',
  styleUrl: './lit.component.css'
})
export  default class LitComponent implements OnInit {
  combinedData: any[] = [];
  cols=[{ field: 'id', header: 'ID' },
      { field: 'name_client', header: 'client' },
      { field: 'name_driver', header: 'conductor' },
      { field: '', header: 'telefono' },
    {field:'email_address',header:'correo'}];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getAllData().subscribe(data => {
      const [clients, drivers, vehicles, cargos, routes, deliveries] = data;

      this.combinedData = deliveries.map((delivery: deliveryM) => {
        const client = clients.find(u => u.id === delivery.client_id);
        const driver = drivers.find(d => d.id === delivery.driver_id);
        const vehicle = vehicles.find(v => v.id === delivery.vehicle_id);
        const cargo = cargos.find(c => c.id === delivery.cargo_id);
        const route = routes.find(r => r.id === delivery.route_id);
        // hola mundo
        return {
          ...delivery,
          client_name: client ? client.name : 'Unknown Client',
          driver_name: driver ? driver.name : 'Unknown Driver',
          vehicle_name: vehicle ? vehicle.licence_plate : 'Unknown Vehicle',
          cargo_name: cargo ? cargo.description : 'Unknown Cargo',
          route_name: route ? route.origin : 'Unknown Route',
        };
      });
    })

      console.log(this.combinedData);
  }
}
