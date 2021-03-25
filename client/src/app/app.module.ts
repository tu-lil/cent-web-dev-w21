// like manifest for the whole app module/component
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BookstoreModule } from './bookstore/bookstore.module'

import { AppComponent } from './app.component';

import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';

// decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactUsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookstoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
