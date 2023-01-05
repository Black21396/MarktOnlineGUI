import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/carts/components/cart/cart.component';
import { AllProductsComponent } from 'src/products/components/all-products/all-products.component';
import { ProductDetailsComponent } from 'src/products/components/product-details/product-details.component';

const routes: Routes = [
  {path: "products", component: AllProductsComponent},
  {path: "details/:id", component: ProductDetailsComponent},
  {path: "carts", component: CartComponent},
  {path: "**", redirectTo: "products", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
