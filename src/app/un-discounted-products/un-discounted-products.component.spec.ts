import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnDiscountedProductsComponent } from './un-discounted-products.component';

describe('UnDiscountedProductsComponent', () => {
  let component: UnDiscountedProductsComponent;
  let fixture: ComponentFixture<UnDiscountedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnDiscountedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnDiscountedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
