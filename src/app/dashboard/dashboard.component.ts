import { CommunicationService } from './../../shared/service/communication/communication.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SideNavbarComponent } from "../../shared/side-navbar/side-navbar.component";
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SideNavbarComponent, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  communicationService = inject(CommunicationService)

}
