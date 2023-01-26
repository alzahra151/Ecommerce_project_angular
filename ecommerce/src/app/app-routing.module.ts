import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsParentComponent } from './components/products-parent/ProductsParentComponent';
import { UpdateComponent } from './components/update/update.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [
  {path :'' , redirectTo: '/Home' ,pathMatch:'full'},
  {path:'Home' ,component:HomeComponent},
  {path :'About Us' , component: AboutUsComponent},
  {path :'products' , component: ProductsParentComponent},
  {path:'products/:prodId' ,component:ProductDetailsComponent },
  {path:'product/Add' ,component:AddProductComponent},
  {path:'product/edit/:prod' ,component:AddProductComponent},
  {path :'registration' ,component:UserRegistrationComponent},
  {path :'login' ,component:LoginComponent},
  {path :'logout' ,component:LogoutComponent},
  {path :'**' , component: NotFoundComponent} //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
