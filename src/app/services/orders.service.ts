import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order'; 

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = 'http://localhost:8088/api/orders'; //change to the base server url only "http://localhost:8088/"

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${id}`);
  }

  updateOrderState(id: number, state: string, billState: string): Observable<Order> {
    const params = {
      state: state,
      billState: billState,
    };
    return this.http.put<Order>(`${this.baseUrl}/${id}`, null, { params });
  }
  
  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  sendOrderDetails(order: Order): Observable<string> {
    const url = `${this.baseUrl}/send-order-details`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<string>(url, order, { headers });
  }
}
