import { Component, NgModule, OnInit,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Delivery } from '../../../models/deliverydModel';
import { DeliveriDService } from '../../../services/delivery.service';
@Component({
  selector: 'app-lit',
  standalone: true,
  imports: [FormsModule,TableModule,CommonModule],
  templateUrl: './lit.component.html',
  styleUrl: './lit.component.css'
})
export  default class LitComponent  {
  
  private deliveriService=inject(DeliveriDService);
  deliveries:Delivery[]=[];
  constructor(
  ){}
  ngOnInit(): void {
      ///this.deliveriService.list().subscribe(deliveri=>{this.deliveries=deliveri})
     
  }
}
