import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/Product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: "Scissors",
        description: "use this to cut stuff",
        price: 4.99
      },
      {
        id: 2,
        name: "Steak Knives",
        description: "use this to eat food with",
        price: 10.99
      },
      {
        id: 3,
        name: "Shot Glass",
        description: "use this to take shots",
        price: 5.99
      }
    ];
  }
}
