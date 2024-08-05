import { Component, inject } from '@angular/core';
import { DeliveriDService } from '../../services/delivery.service';
import { Delivery } from '../../models/deliverydModel';
import { TableModule } from 'primeng/table';
import { Navbar2Component } from '../navbar2/navbar2.component';

@Component({
  selector: 'app-listad',
  standalone: true,
  imports: [TableModule,Navbar2Component],
  templateUrl: './listad.component.html',
  styleUrl: './listad.component.css'
})
export default class ListadComponent {
  private deliveriService=inject(DeliveriDService);
  deliveries:Delivery[]=[];
  
  ngOnInit(): void {
    this.deliveriService.list().subscribe(deliveri=>{this.deliveries=deliveri})
    console.log(this.deliveries)
  }

}
