import { Component } from '@angular/core';
import { Repas } from '../repas';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panier: Repas[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.panier = this.cartService.getCart(); // Utiliser getCart() au lieu de getPanier()
  }

  retirerDuPanier(repas: Repas): void {
    this.cartService.retirerDuPanier(repas);
    this.panier = this.cartService.getCart(); // Utiliser getCart() au lieu de getPanier()
  }

  viderPanier(): void {
    this.cartService.viderPanier();
    this.panier = []; // Vider la liste après vidage du panier
  }



  genererFacture(): void {
    const facture = this.genererContenuFacture();
    const fenetreFacture = window.open('', '_blank');
    if (fenetreFacture) {
      fenetreFacture.document.write(`
        <html>
        <head>
          <title>Facture</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
          <div class="container mt-5">
            <div class="card">
              <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Facture</h3>
              </div>
              <div class="card-body">
                ${facture}
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-primary" onclick="window.print()">Imprimer la Facture</button>
          </div>
        </body>
        </html>
      `);
    } else {
      alert('Veuillez autoriser les fenêtres contextuelles pour afficher la facture.');
    }
  }




  private genererContenuFacture(): string {
    const dateFacture = new Date().toLocaleDateString();
    let total = 0;
    let contenuFacture = `
      <h5>Facture - Date : ${dateFacture}</h5>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Produit</th>
            <th scope="col">Prix unitaire</th>
          </tr>
        </thead>
        <tbody>
    `;

    for (const repas of this.panier) {
      const ligneFacture = `
        <tr>
          <td>${repas.name}</td>
          <td>${repas.price}</td>
        </tr>
      `;
      total += repas.price;
      contenuFacture += ligneFacture;
    }

    contenuFacture += `
        </tbody>
      </table>
      <h4>Total : ${total}</h4>
    `;
    return contenuFacture;
  }


}
