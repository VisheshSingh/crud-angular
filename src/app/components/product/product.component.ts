import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/product.service";
import { clone } from "lodash";

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
  editProduct: Product;
  editProductForm: boolean = false;

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
      this.editProductForm = true;
      this.editProduct = clone(product);
    }
  }

  saveProduct(product: Product) {
    if (this.isNewForm) {
      // add new product
      this.productService.addProduct(product);
      this.newProduct = { id: null, name: "", description: "", price: null };
    }
    this.productForm = false;
  }

  updateProduct() {
    this.productService.updateProd(this.editProduct);
    this.editProductForm = false;
    this.editProduct = { id: null, name: "", description: "", price: null };
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  cancelEdit() {
    this.editProduct = { id: null, name: "", description: "", price: null };
    this.editProductForm = false;
  }

  cancelNewProduct() {
    this.newProduct = { id: null, name: "", description: "", price: null };
    this.productForm = false;
  }
}
