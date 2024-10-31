import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  constructor() { }

  greetings() {
    if(new Date().getHours() < 12) {
      return 'Good Morning';
    } else if(new Date().getHours() < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }
}
