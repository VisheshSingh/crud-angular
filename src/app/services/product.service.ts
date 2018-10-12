import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { PRODUCT_ITEMS } from "../data/product-data";
import { findIndex } from "lodash";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private pItems = PRODUCT_ITEMS;

  constructor() {}

  getProductsFromData(): Product[] {
    console.log(this.pItems);
    return this.pItems;
  }

  addProduct(product: Product) {
    this.pItems.push(product);
  }

  updateProd(product: Product) {
    let index = findIndex(this.pItems, (p: Product) => {
      return p.id === product.id;
    });
    this.pItems[index] = product;
  }

  deleteProduct(product: Product) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
  }
}
