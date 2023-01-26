import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icateogry } from '../models/icateogry';
//import { environment } from 'src/environments/environment';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
private httpOptions={};
productupdate:any
  constructor(private httpClient :HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
  }

  getallProducts() :Observable<IProduct[]>
  {
    return  this.httpClient.get<IProduct[]>(`${environment.apiUrl}/products`)
  }
  getCategories(){
  
    return this.httpClient.get<Icateogry[]>(`${environment.apiUrl}/categories`)
  }
 
  getProductsByCatId(catID: Number):Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}/products?categoryID=${catID}`)
  }

  getProductById(prodID :Number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.apiUrl}/products/${prodID}`)
  }

  getProductsIds():Observable<IProduct[]>
  {
     return  this.httpClient.get<IProduct[]>(`${environment.apiUrl}/products`)
  }

  addNewProduct(Newprod:IProduct):Observable<IProduct>{
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
  //   formData.append("Img", file ,file.name);
  //   //  let fileData= formData
  // // Newprod.Img=fileData.getAll('file')[0]
  // // formData.append("Name", Newprod.Name ); 
  // console.log(formData)  
  // Newprod.Img=file.name
  // console.log( Newprod.Img)
    return this.httpClient.post<IProduct>(`${environment.apiUrl}/products` ,JSON.stringify(Newprod)  ,this.httpOptions)
  }
  updateProduct(prod:Number){
    return this.httpClient.put(`${environment.apiUrl}/products/${prod}`,this.productupdate) 
  }

  deletProduct(prod:Number){
    return this.httpClient.delete(`${environment.apiUrl}/products/${prod}`) 
  }
  upload(file) {
  
    // Create form data
    // const formData = new FormData(); 
      
    // // Store form name as "file" with file data
    // formData.append("file", file, file.name);
    //  let fileData= formData
    // Make http post request over api
    // with formData as req
    // return fileData
}
}
