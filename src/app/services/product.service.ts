import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { PRODUCT_ITEMS } from "../data/product-data";

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
}
