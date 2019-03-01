import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}
