import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { vehicleM } from '../models/vehicleModel';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private http=inject(HttpClient);
  private route='http://localhost:8080/vehicles';
  list(){
    return this.http.get<vehicleM[]>(this.route);
  }
  get(id: number){
    return this.http.get<vehicleM>(this.route+`/${id}`);
  }
  new(){
    return this.http.get<vehicleM>(this.route);
  }
  create(vehicle:vehicleM){
    return this.http.post<vehicleM>(this.route,vehicle);
  }
  update(id:number,vehicle:vehicleM){
    return this.http.put<vehicleM>(this.route+`/${id}`,vehicle);
  }
  delete(id: number){
    return this.http.delete(this.route+`/${id}`);
  }
}
