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
import { StoreFirstGuard } from './guards/storeFirst.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'books', component: BookstoreComponent, canActivate: [StoreFirstGuard]},
  {path: 'books/add', component: BookAddComponent, canActivate: [StoreFirstGuard]},
  {path: 'books/update/:bookId', component: BookUpdateComponent, canActivate: [StoreFirstGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ StoreFirstGuard]
})
export class AppRoutingModule { }
