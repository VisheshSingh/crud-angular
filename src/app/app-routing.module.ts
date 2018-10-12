import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";

const appRoutes: Routes = [
  { path: "", component: ProductComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
