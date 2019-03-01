import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .then(data => {
        console.log(data);
        this.products = data
      });
  }

}
