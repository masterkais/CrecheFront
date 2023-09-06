import { Component, OnInit } from '@angular/core';
import { Enfant } from '../enfant';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EnfantService } from '../enfant.service';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
  providers: [MessageService, ConfirmationService],

})
export class EnfantComponent implements OnInit {
  filteredProducts: Enfant[] = [];
  productDialog: boolean = false;

  products: Enfant[] = [];

  product: Enfant = {
    idenfant: '',
    nom: '',
    prenom: '',
    dateNaissance: new Date(),
    adresse: ''
  };

  selectedProducts!: Enfant[] | null;
  
  searchKeyword: string = '';


  submitted: boolean = false;

  statuses!: any[];
  filteredData: any;
  data: any;

  constructor(private productService: EnfantService, private messageService: MessageService, 
    private confirmationService: ConfirmationService,private enfantDataService: EnfantService) {}

 
  ngOnInit() {
    this.loadEnfants();
  }
 
  loadEnfants() {
    this.productService.getEnfants().then((data) => {
      this.products = data;
    });
  }
  

  openNew() {
    this.product = {
      idenfant: '',
      nom: '',
      prenom: '',
      dateNaissance: new Date(),
      adresse: ''
    };
    this.submitted = false;
    this.productDialog = true;
  }
  

  deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Voulez-vous vraiment supprimer les enfants sélectionnés ?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
              this.selectedProducts = null;
              this.messageService.add({ severity: 'success', summary: 'Réussi', detail: 'Enfants supprimé', life: 3000 });
          }
      });
  }

  editProduct(product: Enfant) {
      this.product = { ...product };
      this.productDialog = true;
  }

  deleteProduct(product: Enfant) {
      this.confirmationService.confirm({
          message: 'Voulez-vous vraiment supprimer ' + product.nom + '?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter((val) => val.idenfant !== product.idenfant);
              //this.product = {};
              this.messageService.add({ severity: 'success', summary: 'Réussi', detail: 'Enfant supprimé', life: 3000 });
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.nom?.trim()) {
      if (this.product.idenfant) {
        this.productService
          .updateEnfant(this.product)
          .then((updatedEnfant) => {
            this.products[
              this.findIndexById(updatedEnfant.idenfant)
            ] = updatedEnfant;
            this.messageService.add({
              severity: 'success',
              summary: 'Réussi',
              detail: 'enfant mis à jour',
              life: 3000,
            });
            this.products = [...this.products];
            this.productDialog = false;
          })
          .catch((error) => {
            console.error('Erreur de mise à jour enfant:', error);
          });
      } else {
        this.productService
          .createEnfant(this.product)
          .then((createdEnfant) => {
            createdEnfant.idenfant = createdEnfant.idenfant || '';
            this.products.push(createdEnfant);
            this.messageService.add({
              severity: 'success',
              summary: 'Réussi',
              detail: 'enfant est creé',
              life: 3000,
            });
            this.products = [...this.products];
            this.productDialog = false;
          })
          .catch((error) => {
            console.error('Erreur de creation enfant:', error);
          });
      }
    }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].idenfant === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  clearSearch() {
    this.searchKeyword = ''; // Efface le texte de recherche
    this.filterProducts();  // Réinitialise pour afficher tous les produits
  }
filterProducts() {
  if (this.searchKeyword.trim() === '') {
    this.products = [...this.products]; // Réinitialisation pour afficher tous les produits
  } else {
    this.products = this.products.filter(product =>
      product.nom.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
      product.prenom.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
      product.dateNaissance.toString().toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
      product.adresse.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }
}



  
}


