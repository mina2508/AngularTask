import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'newproj';
  @ViewChild(ProductsComponent) child: ProductsComponent =
    new ProductsComponent(new ProductServiceService());
  renderValues() {
    this.child.renderValues();
  }
}
