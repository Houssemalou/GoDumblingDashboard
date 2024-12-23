import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RestaurantTableComponent } from '../restaurant-table/restaurant-table.component';
import { OrdersStatesStatictsComponent } from '../orders-states-staticts/orders-states-staticts.component';
import { TipsComponent } from "../tips/tips.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RestaurantTableComponent, OrdersStatesStatictsComponent, TipsComponent, TipsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainContentComponent {

}
