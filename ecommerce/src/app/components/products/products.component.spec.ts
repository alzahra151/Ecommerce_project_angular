import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiProductsService } from 'src/app/services/api-products.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
 let service: ApiProductsService  /////////
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers:[ApiProductsService]  ///////////
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(ApiProductsService)  //////////////
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProductsByCatId()' ,function(){
    spyOn(service , "getProductsByCatId")
     component.ngOnInit()  ////run componant
     expect(service.getProductsByCatId).toHaveBeenCalled() ////
     expect(service.getProductsByCatId).toHaveBeenCalledTimes(1) ////////

  })
});
