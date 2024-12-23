import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/orders.service';
import { Order } from '../models/order';
import { OrderStateService } from '../services/order-state.service';

@Component({
  selector: 'app-orders-states-staticts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders-states-staticts.component.html',
  styleUrl: './orders-states-staticts.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdersStatesStatictsComponent {

  restaurantData: Order[] = [];

  // Order counts
  receivedPercentage: number = 0;
  deliveredPercentage: number = 0;
  pendingPercentage: number = 0;
  canceledPercentage: number = 0;

  constructor(private orderStateService: OrderStateService) {}

  

  ngOnInit(): void {
    this.orderStateService.orders$.subscribe(data => {
      this.restaurantData = data;
      this.calculatePercentages();
    });
  }

  
  calculatePercentages(): void {
    const totalOrders = this.restaurantData.length;
    if (totalOrders > 0) {
      this.receivedPercentage = parseFloat(((this.restaurantData.filter(order => order.state === 'Received').length / totalOrders) * 100).toFixed(2));
      this.deliveredPercentage = parseFloat(((this.restaurantData.filter(order => order.state === 'Delivered').length / totalOrders) * 100).toFixed(2));
      this.pendingPercentage = parseFloat(((this.restaurantData.filter(order => order.state === 'Pending').length / totalOrders) * 100).toFixed(2));
      this.canceledPercentage = parseFloat(((this.restaurantData.filter(order => order.state === 'Canceled').length / totalOrders) * 100).toFixed(2));
    } else {
      this.receivedPercentage = 0;
      this.deliveredPercentage = 0;
      this.pendingPercentage = 0;
      this.canceledPercentage = 0;
    }
  }

}
