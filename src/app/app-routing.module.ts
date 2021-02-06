import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent} from './components/products/products.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PathComponent } from './components/path/path.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { AddProductComponent } from './components/forms/add-product/add-product.component';
import { ImportsubscriptionComponent } from './components/forms/add-product/importsubscription/importsubscription.component';
import { AddcourseComponent } from './components/forms/addcourse/addcourse.component';
import { AddpathComponent } from './components/forms/addpath/addpath.component';
import { AddauthorComponent } from './components/forms/addauthor/addauthor.component';
import { AddcategoryComponent } from './components/forms/addcategory/addcategory.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'authors', component: AuthorsComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'path', component: PathComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'importsubscription', component: ImportsubscriptionComponent },
  { path: 'addcourse', component: AddcourseComponent},
  { path: 'addpath', component: AddpathComponent},
  { path: 'addauthor', component: AddauthorComponent},
  { path: 'addcategory', component: AddcategoryComponent},
  { path: 'importsubscription', component: ImportsubscriptionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
