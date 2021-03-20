import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookstoreComponent } from './bookstore.component'



@NgModule({
  declarations: [
    BookstoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookstoreComponent
  ]
})
export class BookstoreModule { }
