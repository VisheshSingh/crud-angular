import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
