import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { BookstoreComponent } from './bookstore/bookstore.component'
import { BookDetailsComponent } from './bookstore/book-details/book-details.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'books', component: BookstoreComponent},
  {path: 'books/details', component: BookDetailsComponent},
  {path: 'books/edit', component: BookDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
