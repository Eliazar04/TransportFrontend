import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { driverM } from '../models/driverModel';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private http=inject(HttpClient);
  private route='http://localhost:8080/drivers';
  list(){
    return this.http.get<driverM[]>(this.route);
  }
  get(id: number){
    return this.http.get<driverM>(this.route+`/${id}`);
  }
  new(){
    return this.http.get<driverM>(this.route);
  }
  create(driver:driverM){
    return this.http.post<driverM>(this.route,driver);
  }
  update(id:number,driver:driverM){
    return this.http.put<driverM>(this.route+`/${id}`,driver);
  }
  delete(id: number){
    return this.http.delete(this.route+`/${id}`);
  }
}
