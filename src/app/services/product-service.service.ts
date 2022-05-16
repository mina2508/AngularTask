import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}
  Products: IProduct[] = [
    { ID: 1, Name: 'product1', Quantity: 5000, Price: 500, img: 'img.jpg' },
    { ID: 2, Name: 'product2', Quantity: 4000, Price: 200, img: 'img2.jpg' },
    { ID: 3, Name: 'product3', Quantity: 3000, Price: 100, img: 'img3.jpg' },
  ];
  getProducts(): IProduct[] {
    return this.Products;
  }
  getProductById(prdId: number) {
    return this.Products.find((p) => p.ID === prdId) ?? null;
  }
}
