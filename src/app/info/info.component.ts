import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {}
