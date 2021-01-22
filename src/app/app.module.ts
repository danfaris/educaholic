import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PathComponent } from './components/path/path.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProductComponent } from './components/forms/add-product/add-product.component';
import { ImportsubscriptionComponent } from '../app/components/forms/add-product/importsubscription/importsubscription.component';
import { AddcourseComponent } from './components/forms/addcourse/addcourse.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, ProductsComponent, SubscriptionsComponent, OrdersComponent, CustomersComponent, CoursesComponent, PathComponent, AuthorsComponent, CategoriesComponent, CommentsComponent, LoginComponent, SidebarComponent, AddProductComponent, ImportsubscriptionComponent, AddcourseComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
