import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, inject, Output,EventEmitter, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DriverService } from '../../../services/driver.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,CommonModule,ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() name:string='';
  @Input() data: any[] = [];
  @Input() cols: any[] = [];
  @Input() icon1:string='';
  @Input() icon2:string='';
  @Output() editEvent = new EventEmitter<any>(); // Evento de edición
  @Output() deleteEvent = new EventEmitter<number>(); // Emite un evento para la eliminación
  
  onDelete(id: number) {
    this.deleteEvent.emit(id);
  }
  
  onEdit(item: any) {
    this.editEvent.emit(item); // Emitir el evento de edición con la entrada a editar
  }
 
  
}

