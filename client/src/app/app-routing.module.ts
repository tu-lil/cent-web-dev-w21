import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { BookstoreComponent } from './bookstore/bookstore.component'
import { BookUpdateComponent } from './bookstore/book-update/book-update.component';
import { BookAddComponent } from './bookstore/book-add/book-add.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'books', component: BookstoreComponent},
  {path: 'books/add', component: BookAddComponent},
  {path: 'books/update/:bookId', component: BookUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
