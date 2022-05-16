import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountedProductsComponent } from './discounted-products/discounted-products.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UnDiscountedProductsComponent } from './un-discounted-products/un-discounted-products.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'LogIn', component: LogInComponent },
  {
    path: 'Product',
    component: ProductsComponent,
    children: [
      {
        path: 'discountedproducts', // child route path
        component: DiscountedProductsComponent, // child route component that the router renders
      },
      {
        path: 'undiscountedproducts',
        component: UnDiscountedProductsComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'Users', component: UsersComponent },
  { path: 'Posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
