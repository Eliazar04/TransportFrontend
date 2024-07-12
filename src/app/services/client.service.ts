import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { clientM } from '../models/clientModel';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private http=inject(HttpClient);
  private route='http://localhost:8080/clients';
  list(){
    return this.http.get<clientM[]>(this.route);
  }
  get(id: number){
    return this.http.get<clientM>(this.route+`/${id}`);
  }
  new(){
    return this.http.get<clientM>(this.route);
  }
  create(client:clientM){
    return this.http.post<clientM>(this.route,client);
  }
  update(id:number,client:clientM){
    return this.http.put<clientM>(this.route+`/${id}`,client);
  }
  delete(id: number){
    return this.http.delete(this.route+`/${id}`);
  }
}
