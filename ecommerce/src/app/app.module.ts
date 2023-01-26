import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadowDirective } from './shadow.directive';
import { IncreaseSadowDirective } from './directives/increase-sadow.directive';
import { NationalIDPipe } from './pipes/national-id.pipe';
import { ProductsParentComponent } from "./components/products-parent/ProductsParentComponent";
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    ShadowDirective,
    IncreaseSadowDirective,
    NationalIDPipe,
    ProductsParentComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegistrationComponent,
    LoginComponent,
    LogoutComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
