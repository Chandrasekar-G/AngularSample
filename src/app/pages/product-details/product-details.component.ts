import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => this.products = data);
  }

}
