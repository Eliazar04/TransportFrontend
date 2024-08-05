import { Component } from '@angular/core';
import { MajorComponent } from '../major/major.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MajorComponent, NavbarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export  class MainComponent {

}
