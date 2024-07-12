import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { routeM } from '../models/routeModel';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private http=inject(HttpClient);
  private route='http://localhost:8080/routes';
  list(){
    return this.http.get<routeM[]>(this.route);
  }
  
}
