import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  productUrlID:number=0
  constructor(private ActivatedRoute:ActivatedRoute, private productsApi :ApiProductsService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap
    .subscribe( (param) =>{
      this.productUrlID = Number(param.get('prod')) 
     console.log(this.productUrlID)
    });

    // updateProduct(prodID:Number,prod:IProduct){
    //   this.productsApi.updateProduct(prodID,prod).subscribe(prod=>{
    //       console.log(prod)
    //   })
    //  }
    //  this.productsApi.updateProduct(this.productUrlID)
  }

}
