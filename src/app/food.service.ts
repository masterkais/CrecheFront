import { Injectable } from '@angular/core';
import { Repas } from './repas';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  static getFoodById(id: any): any {
    throw new Error('Method not implemented.');
  }

  getFoodById(id: number): Repas | undefined {
    const allFoods = this.getAllFoods();
    return allFoods.find(food => food.id === id);
  }

  getAllFoods(): Repas[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        imageUrl: '/assets/images/foods/food-1.jpg',
        // ... autres propriétés ...
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        imageUrl: '/assets/images/foods/food-2.jpg',
        // ... autres propriétés ...
      },
      // ... autres repas ...
    ];
  }

  constructor() { }
}
