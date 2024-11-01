import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  summery = true;
  addTask = false;
  board = false;
  contacts = false;


  deaktivateAllLinks() {
    this.summery = false;
    this.addTask = false;
    this.board = false;
    this.contacts = false;
  }
}
