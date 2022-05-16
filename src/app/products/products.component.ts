import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers = DiscountOffers.NoDiscount;
  storeName: string = '';
  storeLogo: string = '';
  productList: Array<IProduct> = [];
  categoryList: Array<ICategory> = [];
  clientName: string = '';
  isPurchased: boolean = false;
  renderValuesClicked: boolean = false;
  constructor(private productService: ProductServiceService) {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = 'amazon';
    this.storeLogo = '../../assets/mylogo.gif';
    this.productList = this.productService.getProducts();
    this.categoryList = [
      { ID: 1, Name: 'category1' },
      { ID: 2, Name: 'category2' },
      { ID: 3, Name: 'category3' },
    ];
    this.clientName = 'mina';
    this.isPurchased = true;
  }
  toggleIsPurchased() {
    this.isPurchased = !this.isPurchased;
  }

  renderValues() {
    this.productList = this.productService.getProducts();
    this.renderValuesClicked = !this.renderValuesClicked;
  }
  // @Output() childEvent = new EventEmitter();
  // sendData() {
  //   this.childEvent.emit(this.renderValues);
  // }
  ngOnInit(): void {
    // this.sendData();
  }
}
