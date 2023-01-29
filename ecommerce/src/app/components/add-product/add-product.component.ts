import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icateogry } from 'src/app/models/icateogry';
import { IProduct } from 'src/app/models/iproduct';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
newprod:IProduct={} as IProduct
catList:Icateogry[]=[];
productUrlID:Number=0
imageSrc: string |any =''
file: File |any = null;
editProduct:IProduct |null=null
  constructor(private apiProduct:ApiProductsService,
              private router:Router ,
              private ActivatedRoute:ActivatedRoute,
              private apiservice:ApiProductsService) {
               }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap
    .subscribe( (param) =>{
      this.productUrlID = Number(param.get('prod')) 
     console.log(this.productUrlID)
    });
    this.apiProduct.getProductById(this.productUrlID).subscribe(product=>{
      this.editProduct=product
    })
    this.apiservice.getCategories().subscribe(cats=>
      this.catList=cats
    )
  }
  readURL(event: Event): void {
   const HtmlFile=event.target as HTMLInputElement
    if (HtmlFile.files && HtmlFile.files[0]) {
        this.file =HtmlFile.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        // this.imageSrc.pending = true;
        
        reader.readAsDataURL(this.file);
    }
}
  
addProduct(){
 this.newprod.CateogryID=Number(this.newprod.CateogryID) 
this.apiProduct.addNewProduct(this.newprod).subscribe({
 
  next: (prod)=>{
    console.log(prod)
    
    this.router.navigate(['/products'])
  },
  error:(err)=>{
    console.log(err)
  }
})
}
}
