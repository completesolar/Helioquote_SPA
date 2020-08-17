import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selected = 2;

  proposals = [
    {
      value: 1,
      title: 'test'
    },
    {
      value: 2,
      title: 'test2'
    },
    {
      value: 3,
      title: 'test3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
