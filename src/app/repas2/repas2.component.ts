import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { Repas } from '../repas';
import { ActivatedRoute, Router } from '@angular/router';
import { RepasService } from '../repas.service';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-repas2',
  templateUrl: './repas2.component.html',
  styleUrls: ['./repas2.component.css']
})
export class Repas2Component {
  repasList: Repas[] = [];
  repas: Repas | undefined;


  panier = []; // Tableau pour stocker les repas ajoutés au panier
  recherche = ''; // Pour la barre de recherche
  showSuccessMessage = false;

  constructor(
    private repasService: RepasService,
    private router: Router,
    private route: ActivatedRoute, // Correctif : Ajout de ActivatedRoute
    private cartService: CartService,
    private foodService: FoodService // Correctif : Ajout de FoodService
  ) { }

  ngOnInit(): void {
    this.repasList = this.repasService.getRepas();

    this.route.params.subscribe((params) => { // Utilisation de route.params
      if (params['id']) {
        const repasId = Number(params['id']); // Assurez-vous que l'id est de type nombre
        this.repas = this.foodService.getFoodById(repasId);
      }
    });
  }

  ajouterAuPanier(repas: Repas): void {
    this.cartService.addToCart(repas);
    alert('Repas ajouté au panier !');
  }

  voirPanier(): void {
    this.router.navigateByUrl('home1/panier');
  }

  addToCart(): void {
    if (this.repas) {
      this.cartService.addToCart(this.repas); // Ajout au panier
      this.router.navigateByUrl('/cart-page');
    }
  }

  filtrerRepas() {
    if (!this.recherche) {
      return this.repasList; // Si la recherche est vide, afficher tous les repas
    }

    const searchTerm = this.recherche.toLowerCase();
    return this.repasList.filter(repas => repas.name.toLowerCase().includes(searchTerm));
  }

}
