import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  showModal = false;

  // New restaurant model
  newRestaurant = {
    name: '',
    cuisine: '',
    place:'',
    deliveryTime: '',
    deliveryCost: '',
    rating: null,
    reviews: null,
    code: '',
    managerName: '',
    selectedDays: [] as string[]
  };

  ahrensburgRestaurants = [
    {
      name: 'GoDumpling Ahrensburg',
      cuisine: 'Korean, Dumplings, Asian',
      deliveryTime: 'est. 40min',
      deliveryCost: 'FREE',
      rating: 4.5,
      reviews: 33
    }
  ];

  berlinRestaurants = [
    {
      name: 'GoDumpling Wedding',
      cuisine: 'Chinese, Dumplings, Asian',
      deliveryTime: 'est. 45min',
      deliveryCost: '1,25 € - 5,99 €',
      rating: 4.4,
      reviews: 147
    },
    {
      name: 'GoDumpling Checkpoint Charlie',
      cuisine: 'Korean, Dumplings, Asian',
      deliveryTime: 'Closed',
      deliveryCost: '1,25 € - 5,99 €',
      rating: 4.2,
      reviews: 14
    },
    {
      name: 'GoDumpling Lichtenberg',
      cuisine: 'Dumplings, Asian, 2 for 1 Deals',
      deliveryTime: 'est. 25min',
      deliveryCost: 'FREE',
      rating: 4.3,
      reviews: 31
    },
    {
      name: 'GoDumpling Moabit',
      cuisine: 'Korean, Dumplings, Asian',
      deliveryTime: 'From 15:00',
      deliveryCost: '1,25 € - 5,99 €',
      rating: 4.5,
      reviews: 50
    },
    {
      name: 'GoDumpling Hindenburgdamm',
      cuisine: 'Korean, Dumplings, Asian',
      deliveryTime: 'From 00:00',
      deliveryCost: 'FREE',
      rating: 3.5,
      reviews: 4
    },
    {
      name: 'GoDumpling Pankow',
      cuisine: 'Vegetarian, Asian, 2 for 1 Deals',
      deliveryTime: 'est. 30min',
      deliveryCost: 'FREE',
      rating: 4.0,
      reviews: 15
    },
    {
      name: 'GoDumpling Hohenschönhausen',
      cuisine: 'Dumplings, Asian, 2 for 1 Deals',
      deliveryTime: 'est. 65min',
      deliveryCost: 'FREE',
      rating: 3.8,
      reviews: 12
    },
    {
      name: 'GoDumpling Wilmersdorf',
      cuisine: 'Dumplings, Asian, 2 for 1 Deals',
      deliveryTime: 'est. 30min',
      deliveryCost: 'FREE',
      rating: 4.3,
      reviews: 14
    },
    {
      name: 'GoDumpling Reinickendorf',
      cuisine: 'Korean, Dumplings, Asian',
      deliveryTime: 'est. 45min',
      deliveryCost: '1,25 € - 5,99 €',
      rating: 4.2,
      reviews: 14
    },
    {
      name: 'GoDumpling Charlottenburg',
      cuisine: 'Dumplings, Asian',
      deliveryTime: 'Closed',
      deliveryCost: '1,25 € - 5,99 €',
      rating: 4.0,
      reviews: 25
    },
    {
      name: 'GoDumpling Spandau',
      cuisine: 'Korean, Dumplings, Asian',
      deliveryTime: 'est. 50min',
      deliveryCost: '0,00 € - 5,99 €',
      rating: 4.1,
      reviews: 31
    },
    {
      name: 'GoDumpling Adlershof Dörpfeldstraße',
      cuisine: 'Dumplings, Asian, 2 for 1 Deals',
      deliveryTime: 'est. 25min',
      deliveryCost: 'FREE',
      rating: 4.6,
      reviews: 48
    },
    {
      name: 'GoDumpling Friedrichshain',
      cuisine: 'Dumplings, Asian, 2 for 1 Deals',
      deliveryTime: 'est. 45min',
      deliveryCost: 'FREE',
      rating: 4.3,
      reviews: 41
    }
  ];
  

 // Days of the week
 daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 selectedDays: string[] = [];

 constructor(private http: HttpClient) {}

 openAddRestaurantModal() {
   this.showModal = true;
 }

 closeAddRestaurantModal() {
   this.showModal = false;
 }

 updateSelectedDays(event: Event) {
   const selectedOptions = Array.from((event.target as HTMLSelectElement).selectedOptions);
   this.newRestaurant.selectedDays = selectedOptions.map(option => option.value);
 }

 addRestaurant() {
  
 }

  /*addClient(): void {
    if (this.newClient.restaurant_name && this.newClient.restaurant_code && this.newClient.image) {
      this.clients.push({ ...this.newClient });
      this.newClient = { restaurant_name: '', restaurant_code: '', image: '' };
    }
  }*/

}
