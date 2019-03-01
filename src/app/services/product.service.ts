import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts() {
    return new Promise((resolve, reject) => {
      fetch("https://api.myjson.com/bins/y7dty#")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

}
