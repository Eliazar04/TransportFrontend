import { Component } from '@angular/core';
import { Navbar2Component } from '../../main/navbar2/navbar2.component';

import { MajorComponent } from '../../main/major/major.component';
import InicioComponent from '../../admin/inicio/inicio.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navbar2Component,MajorComponent, InicioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
