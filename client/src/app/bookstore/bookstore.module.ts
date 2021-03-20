import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookstoreComponent } from './bookstore.component';
import { BookDetailsComponent } from './book-details/book-details.component'



@NgModule({
  declarations: [
    BookstoreComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookstoreComponent
  ]
})
export class BookstoreModule { }
