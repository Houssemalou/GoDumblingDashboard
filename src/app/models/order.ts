export interface Order {
    id?: number; 
    email: string;
    restaurant_name: string;
    restaurant_Id: string;
    state: string;
    bill_state: string;
    createdAt: string;
    productOrders?: ProductOrder[];
  }
  
  export interface ProductOrder {
    id?: number; 
    product?: Product; 
    quantity: number;
  }
  
  export interface Product {
    id?: number;     
    name: string;
    description: string;
    image: string;
}
  