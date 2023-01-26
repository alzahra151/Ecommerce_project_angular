import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { StaticDataService } from 'src/app/services/static-data.service';
import {map} from 'rxjs'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productUrlID:number=0
  productDetalis:IProduct |null= null
  productListIDs:number[]=[]
  constructor(private ActivatedRoute:ActivatedRoute ,
              private ProductsServes:StaticDataService ,
              private productsApi :ApiProductsService,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {
  //  this.productUrlID=Number(this.ActivatedRoute.snapshot.paramMap.get('prodId'))

  //  this.productDetalis=this.ProductsServes.getProdByID(this.productUrlID)
  this.ActivatedRoute.paramMap
    .subscribe( (param) =>{
      this.productUrlID = Number(param.get('prodId')) 
    
    });
    console.log(this.productUrlID )
    this.productsApi.getProductById(this.productUrlID).subscribe(product=>{
      this.productDetalis=product
      console.log( this.productDetalis )
    })
  
  
   this.productsApi.getProductsIds().subscribe(products=>{
    this.productListIDs=products.map(productId=>productId.id)
    console.log(this.productListIDs)
   })
   
  }
  
  goToback(){
    this.location.back()
  }
  prev(){

  let curentIdex= this.productListIDs.findIndex((elem)=>elem==this.productUrlID)
  let prevIndex;
  if(curentIdex>0){
    prevIndex=this.productListIDs[--curentIdex]
    console.log(prevIndex)
    this.router.navigate(['/products' , this.productListIDs[--curentIdex]])
  }
  }
  next(){
   let curentIdex= this.productListIDs.findIndex((elem)=>elem==this.productUrlID)
   let nextIndex;
    console.log(curentIdex)
    console.log(this.productListIDs.length)
   if(curentIdex < this.productListIDs.length-1){
    nextIndex=this.productListIDs[++curentIdex]
    console.log(nextIndex)
    this.router.navigate(['/products' , this.productListIDs[++curentIdex]])
  }
  }
}
