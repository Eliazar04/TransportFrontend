import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cargoM } from '../models/cargoModel';
import { Delivery } from '../models/deliverydModel';
@Injectable({
  providedIn: 'root'
})
export class DeliveriDService {

  private http=inject(HttpClient);
  private route='http://localhost:8080/deliveriList';
  list(){
    return this.http.get<Delivery[]>('http://localhost:8080/deliveriList');
  }
}
