import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  needHelp = false;
  isProfileMenuActive = false;


  toggelProfileMenu() {
    this.isProfileMenuActive = !this.isProfileMenuActive;
  }

  closeProfileMenu() {
    this.isProfileMenuActive = false;
  }


}
