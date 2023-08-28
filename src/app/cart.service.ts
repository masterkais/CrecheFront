import { Injectable } from '@angular/core';
import { Repas } from './repas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8082';
  private cart: Repas[] = [];

  constructor(private http: HttpClient) { }

  addToCart(repas: Repas): void {
    this.cart.push(repas);
  }

  getCart(): Repas[] {
    return this.cart;
  }

  retirerDuPanier(repas: Repas): void {
    const index = this.cart.indexOf(repas);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  viderPanier(): void {
    this.cart = [];
  }
}
