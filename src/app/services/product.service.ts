import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts() {
    return [{
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
  }

}
