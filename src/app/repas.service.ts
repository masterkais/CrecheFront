import { Injectable } from '@angular/core';
import { Repas } from './repas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  private repasList: Repas[] = [
    {
      id: 1,
      name: 'Pizza Pepperoni',
      price: 10,
      imageUrl: '/assets/piz1.PNG'
    },
    {
      id: 2,
      name: 'Hamburger',
      price: 8,
      imageUrl: '/assets/hamb.PNG'
    },
    {
      id: 3,
      name: 'Hamburger ',
      price: 10,
      imageUrl: '/assets/hamb1.PNG'
    },
    {
      id: 4,
      name: 'Plat',
      price: 8,
      imageUrl: '/assets/pla1.PNG'
    },
    {
      id: 5,
      name: 'tacos',
      price: 7,
      imageUrl: '/assets/tacos.PNG'
    },
    {
      id: 6,
      name: 'spagettie',
      price: 11,
      imageUrl: '/assets/spag.PNG'
    },
    {
      id: 7,
      name: 'plat healthy',
      price: 13,
      imageUrl: '/assets/helth.PNG'
    },
    {
      id: 8,
      name: 'sandwich healthy',
      price: 7,
      imageUrl: '/assets/sand.PNG'
    },
    {
      id: 9,
      name: 'gateau',
      price: 4,
      imageUrl: '/assets/gat.PNG'
    },
  ];

  private panier: Repas[] = [];
  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  getRepas(): Repas[] {
    return this.repasList;
  }

  ajouterAuPanier(repas: Repas): void {
    this.panier.push(repas);
  }

  getPanier(): Repas[] {
    return this.panier;
  }

  viderPanier(): void {
    this.panier = [];
  }
}
