import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order';
import { OrderService } from '../services/orders.service';
import { interval } from 'rxjs';
import { OrderStateService } from '../services/order-state.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  standalone: true,
  selector: 'app-restaurant-table',
  imports: [CommonModule, FormsModule, ToastModule],
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css'],
  providers: [MessageService, OrderService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RestaurantTableComponent implements OnInit {
  
  restaurantData: Order[] = []; 
  filterText = '';

  
  currentPage = 0;
  pageSize = 7; 
  paginatedData!: Order[];
  pages!: any[];

  
  states = ['Pending', 'Received', 'Delivered', 'Canceled'];
  paymentStatus = ['Paid', 'Not Paid'];

  
  isModalOpen = false;
  selectedRestaurant!: Order | null;

  constructor(private orderService: OrderService,private orderStateService: OrderStateService,
    private messageService: MessageService
  ) {
    this.updatePagination();
  }
  
  ngOnInit(): void {
    this.getAllOrders();
    interval(600000).subscribe(() => {
      this.getAllOrders();
    });
  
  }
  getAllOrders(): void {
    this.orderService.getAllOrders().subscribe(data => {
      this.restaurantData = data;
      this.orderStateService.setOrders(data);
      this.updatePagination();
    });
  }

  updateOrder(id: number, state: string, bill_state: string): void {
    this.orderService.updateOrderState(id, state, bill_state).subscribe(() => {
      this.orderStateService.updateOrderState(id, state, bill_state);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order updated successfully' });
    });
  }

  deleteOrder(id: number): void {
    this.restaurantData = this.restaurantData.filter(order => order.id !== id);
    this.orderService.deleteOrder(id).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order deleted successfully' });
    });
  }

  sendEmailToAdmin(order: Order): void {
    this.orderService.sendOrderDetails(order).subscribe((data) => {
      console.log(data);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Email sent to admin successfully' });
    });
  }
  
  applyFilter() {
    this.currentPage = 0; 
    this.updatePagination();
  }

  updatePagination() {
    const filteredData = this.restaurantData.filter((restaurant) =>
      restaurant.restaurant_name.toLowerCase().includes(this.filterText.toLowerCase()) ||
      restaurant.restaurant_Id.toLowerCase().includes(this.filterText.toLowerCase())
    );

    const startIndex = this.currentPage * this.pageSize;
    this.paginatedData = filteredData.slice(startIndex, startIndex + this.pageSize);
    this.pages = Array(Math.ceil(filteredData.length / this.pageSize)).fill(0);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  openModal(restaurant: any) {
    this.selectedRestaurant = restaurant;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedRestaurant = null;
  }
  generatePDF(): void {
    const data = document.getElementById('filteredData');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('filtered-data.pdf');
      });
    }
  }
}
