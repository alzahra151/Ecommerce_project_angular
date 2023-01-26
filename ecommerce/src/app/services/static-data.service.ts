import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
 private ProductList:IProduct[] 
  constructor() {
    this.ProductList= [{Id:1,id:1 ,Name:'redmy', Quentity:2 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1,count:1 } ,
  //  {Id:2 ,Name:'samsung', Quentity:5 ,price:6000 ,Img:'assets/labtob.jpg',CateogryID:2 ,count:1} ,
  //   {Id:3 ,Name:'dell', Quentity:1 ,price:6000 ,Img:'assets/labtob.jpg',CateogryID:2 ,count:1} ,
  //  {Id:0 ,Name:'iphon', Quentity:0 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1,count:1 } ,
  //  {Id:2 ,Name:'hp', Quentity:0 ,price:6000 ,Img:'assets/labtob.jpg',CateogryID:2 ,count:1} ,
  //   {Id:5 ,Name:'shomy', Quentity:6 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1,count:1 } ,
  // {Id:0 ,Name:'toshiba', Quentity:1 ,price:6000 ,Img:'assets/tv2.jpg',CateogryID:3,count:1 } ,
  //  {Id:2 ,Name:'tornaido', Quentity:3 ,price:6000 ,Img:'assets/tv2.jpg',CateogryID:3 ,count:1} ,
  //   {Id:3 ,Name:'oop', Quentity:2 ,price:6000 ,Img:'assets/phone1.jpg',CateogryID:1 ,count:1} ,
  ];
   }

   getAllProducts(){
       return this.ProductList;
   }
   getproductsByCatId(catID:number): IProduct[] {
     if (catID==0)
    {
      return this.ProductList
  
    }
    else{
      return this.ProductList.filter(prod=>prod.CateogryID==catID)
    }
   }

   getProdByID(ProdId:number):IProduct | null
   {
       let foundeID= this.ProductList.find(prod =>prod.Id==ProdId)
       return foundeID? foundeID : null
   }

   getProductsIds(){
    let productIDs=this.ProductList.map(prod=>prod.Id)
    return productIDs
   }
}
