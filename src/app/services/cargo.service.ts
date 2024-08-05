import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cargoM } from '../models/cargoModel';
@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private http=inject(HttpClient);
  private route='http://localhost:8080/cargos';
  list(){
    return this.http.get<cargoM[]>(this.route);
  }
  get(id: number){
    return this.http.get<cargoM>(this.route+`/${id}`);
  }
  new(){
    return this.http.get<cargoM>(this.route);
  }
  create(cargo:cargoM){
    return this.http.post<cargoM>(this.route,cargo);
  }
  update(id:number,cargo:cargoM){
    return this.http.put<cargoM>(this.route+`/${id}`,cargo);
  }
  delete(id: number){
    return this.http.delete(this.route+`/${id}`);
  }
}
