import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '', title: 'Dashboard Page', component: DashboardComponent,
    children: [
      { path: 'clients', component: ClientsComponent },
      { path: 'home', component: MainContentComponent }
    ]
  },

];