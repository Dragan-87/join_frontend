import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { BoardComponent } from './dashboard/board/board.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { SummaryComponent } from './dashboard/summary/summary.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
        {path: 'add-task', component: AddTaskComponent},
        {path: 'board', component: BoardComponent},
        {path: 'contacts', component: ContactsComponent},
        {path: 'summary', component: SummaryComponent},
    ]
  }

];
