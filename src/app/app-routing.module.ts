import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import { Shell } from '@app/shell/shell.service';
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


const routes: Routes = [
  // Shell.childRoutes([
  //   {
  //     path: 'about',
  //     loadChildren: () =>
  //       import('./about/about.module').then((m) => m.AboutModule),
  //   },
  // ]),
  // // Fallback when no prior route is matched
  // { path: '**', redirectTo: '', pathMatch: 'full' },
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
  { path: 'subscriptions', component: SubscriptionsComponent}
];
//const routing: ModuleWithProviders = RouterModule.forChild;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
