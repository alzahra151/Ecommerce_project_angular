import { Component,EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';

import {Icateogry} from 'src/app/models/icateogry'
import { CardProducts } from 'src/app/models/card-products';
import { StaticDataService } from 'src/app/services/static-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
 // ProductList:IProduct[] 
 date:Date=new Date()
 cardPoductsArr:CardProducts[]=[]
 prodListOfCat:IProduct[]=[]
 @Input() recievedIdfromPerant: number = 0;
  ClieNtname:string='ahmed';
  
  @Output()  cardProduct:EventEmitter<CardProducts[]>
 
  store:Store;
  IsParserad:boolean=true
  selectedID:number=0;
  productUrlID:number=0
  constructor(private staticserveProducts :StaticDataService ,private router:Router
              ,private apiProducts:ApiProductsService,
              private ActivatedRoute:ActivatedRoute
    ) {
    this.store=new Store('welcome',['sohag','qena'], 'data:image/jpeg;base64,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')
  
  //   this.ProductList= [{Id:1 ,Name:'redmy', Quentity:2 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1,count:1 } ,
  //  {Id:2 ,Name:'samsung', Quentity:5 ,price:6000 ,Img:'assets/labtob.jpg',CateogryID:2 ,count:1} ,
  //   {Id:3 ,Name:'dell', Quentity:1 ,price:6000 ,Img:'assets/labtob.jpg',CateogryID:2 ,count:1} ,
  //  {Id:0 ,Name:'iphon', Quentity:0 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1,count:1 } ,
  //  {Id:2 ,Name:'hp', Quentity:0 ,price:6000 ,Img:'assets/labtob.jpg',CateogryID:2 ,count:1} ,
  //   {Id:5 ,Name:'shomy', Quentity:6 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1,count:1 } ,
  // {Id:0 ,Name:'toshiba', Quentity:1 ,price:6000 ,Img:'assets/tv2.jpg',CateogryID:3,count:1 } ,
  //  {Id:2 ,Name:'tornaido', Quentity:3 ,price:6000 ,Img:'assets/tv2.jpg',CateogryID:3 ,count:1} ,
  //   {Id:3 ,Name:'oop', Quentity:2 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1 ,count:1} ,
  // ];

  this.cardProduct=new EventEmitter<CardProducts[]>

   }
   toggle(){
    this.IsParserad=!this.IsParserad
  }
  // decreaseQuentity(){
  //   this.ProductList.Quentity
  // }

  ngOnChanges(): void {
   // this.productsDependonCat()
  // this.prodListOfCat=this.staticserveProducts.getproductsByCatId(this.recievedIdfromPerant)
   this.apiProducts.getProductsByCatId(this.recievedIdfromPerant).subscribe(products=>{
    this.prodListOfCat=products
   })
  }

  addToCard(productInfo :IProduct){
   this.cardPoductsArr.push(productInfo)    
  this.cardProduct.emit(this.cardPoductsArr)

  }
  showDetails(prodID:number){
    this.router.navigate(['/products' ,prodID])
  }
 deletProduct(prodID:number){
  this.apiProducts.deletProduct(prodID).subscribe(product=>{
    this.apiProducts.getallProducts().subscribe(products=>{
      this.prodListOfCat=products
     })
  })
 }
  ngOnInit(): void {
    this.apiProducts.getallProducts().subscribe(products=>{
      this.prodListOfCat=products
     })
  }

}
