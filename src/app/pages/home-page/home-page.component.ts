import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
