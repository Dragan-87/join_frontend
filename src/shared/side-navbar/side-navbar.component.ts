import { CommunicationService } from './../service/communication/communication.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

  communicationService = inject(CommunicationService)

  isSummaryActive() {
    this.communicationService.summery = true;
    this.communicationService.addTask = false;
    this.communicationService.board = false;
    this.communicationService.contacts = false;
  }

  isAddTaskActive() {
    this.communicationService.summery = false;
    this.communicationService.addTask = true;
    this.communicationService.board = false;
    this.communicationService.contacts = false;
  }

  isBoardActive() {
    this.communicationService.summery = false;
    this.communicationService.addTask = false;
    this.communicationService.board = true;
    this.communicationService.contacts = false;
  }

  isContactsActive() {
    this.communicationService.summery = false;
    this.communicationService.addTask = false;
    this.communicationService.board = false;
    this.communicationService.contacts = true;
  }

}
