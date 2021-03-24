import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookstoreComponent } from './bookstore.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookAddComponent } from './book-add/book-add.component'
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookstoreComponent,
    BookUpdateComponent,
    BookAddComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule
  ],
  exports: [
    BookstoreComponent
  ]
})
export class BookstoreModule { }
