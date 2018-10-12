import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products: Product[];
  productForm: boolean = false;
  isNewForm: boolean;
  newProduct: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProductsFromData();
  }

  showNewProductForm() {
    //reset the form
    if (this.products.length) {
      this.newProduct = { id: null, name: "", description: "", price: null };
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  showEditProductForm(product: Product) {
    if (!product) {
      this.productForm = false;
      return;
    } else {
      this.productForm = true;
      this.isNewForm = false;
      this.newProduct = product;
    }
  }

  saveProduct(product: Product) {
    if (this.isNewForm) {
      // add new product
      this.productService.addProduct(product);
      this.newProduct = { id: null, name: "", description: "", price: null };
    } else {
      // update an existing product
    }
    this.productForm = false;
  }
}
