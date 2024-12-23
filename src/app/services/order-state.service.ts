import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderStateService {
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  setOrders(orders: Order[]): void {
    this.ordersSubject.next(orders);
  }

  updateOrderState(id: number, state: string, bill_state: string): void {
    const orders = this.ordersSubject.getValue();
    const orderIndex = orders.findIndex(order => order.id === id);
    if (orderIndex !== -1) {
      orders[orderIndex].state = state;
      orders[orderIndex].bill_state = bill_state;
      this.ordersSubject.next([...orders]);
    }
  }
}
