import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CardProducts } from 'src/app/models/card-products';
import { Icateogry } from 'src/app/models/icateogry';
import { IProduct } from 'src/app/models/iproduct';
import { ApiProductsService } from 'src/app/services/api-products.service';


@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss']
})
export class ProductsParentComponent implements OnInit  {
  catList: Icateogry[]=[];
  recevedCardItems:CardProducts[]=[]
  selectedCategoryId: number = 0;
  price:number=0
// @ViewChild ('card') cardtableEle ?:ElementRef;

  constructor(private apiservice:ApiProductsService) {
    // this.catList = [
    //   { ID: 1, Name: "Mobiles" },
    //   { ID: 2, Name: "labtops" },
    //   { ID: 3, Name: "TV" }
    // ];

  }
  // ngAfterViewInit(): void {
   
  // }
 
  displayCardInfo(cardProdcts:CardProducts[]){
      
      this.recevedCardItems=cardProdcts
      this.price =0
       for(let key in this.recevedCardItems){
       this.recevedCardItems[key].TotalPrice =this.recevedCardItems[key].count * this.recevedCardItems[key].price
       this.price +=+this.recevedCardItems[key].TotalPrice!
      }
      
  }
  ngOnInit(): void {
    this.apiservice.getCategories().subscribe(cats=>
  this.catList=cats
)
  }

}
