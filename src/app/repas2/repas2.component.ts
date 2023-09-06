import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
@Component({
  selector: 'app-repas2',
  templateUrl: './repas2.component.html',
  styleUrls: ['./repas2.component.css']
})
export class Repas2Component {
  layout: string = 'list';

  products!: Product[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

}
