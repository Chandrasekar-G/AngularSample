import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products = [{
    "id": 1,
    "quantity": 1,
    "name": "Compass"
  },
  {
    "id": 2,
    "quantity": 0,
    "name": "Jacket"
  },
  {
    "id": 3,
    "quantity": 5,
    "name": "Hiking Socks"
  },
  {
    "id": 4,
    "quantity": 2,
    "name": "Suntan Lotion"
  }];
  constructor() { }

  ngOnInit() {
  }

}
