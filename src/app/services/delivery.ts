import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { clientM } from '../models/clientModel';
import { cargoM } from '../models/cargoModel';
import { routeM } from '../models/routeModel';
import { vehicleM } from '../models/vehicleModel';
import { driverM } from '../models/driverModel';
import { deliveryM } from '../models/deliveryModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost/4200';

  constructor(private http: HttpClient) { }

  getClient(): Observable<clientM[]> {
    return this.http.get<clientM[]>(`${this.apiUrl}/clients`);
  }

  getCargo(): Observable<cargoM[]> {
    return this.http.get<cargoM[]>(`${this.apiUrl}/cargos`);
  }

  getRoute(): Observable<routeM[]> {
    return this.http.get<routeM[]>(`${this.apiUrl}/routes`);
  }

  getVehicle(): Observable<vehicleM[]> {
    return this.http.get<vehicleM[]>(`${this.apiUrl}/vehicles`);
  }
  getDriver(): Observable<driverM[]> {
    return this.http.get<driverM[]>(`${this.apiUrl}/Drivers`);
  }

  getDelivery(): Observable<deliveryM[]> {
    return this.http.get<deliveryM[]>(`${this.apiUrl}/deliverys`);
  }






  getAllData(): Observable<[clientM[],driverM[],vehicleM[],cargoM[],routeM[],deliveryM[]]> {
    return forkJoin([
      this.getClient(),
      this.getDriver(),
      this.getVehicle(),
      this.getCargo(),
      this.getRoute(),
      this.getDelivery(),
    ]);
  }
}
