import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../../main/navbar2/navbar2.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet,Navbar2Component
  ],
  templateUrl:'./admin_layout.component.html',
  styleUrl: './admin_layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  class  AdminLayoutComponent { }
