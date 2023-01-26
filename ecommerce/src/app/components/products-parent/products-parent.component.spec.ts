import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsParentComponent } from "./ProductsParentComponent";

describe('ProductsParentComponent', () => {
  let component: ProductsParentComponent;
  let fixture: ComponentFixture<ProductsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
