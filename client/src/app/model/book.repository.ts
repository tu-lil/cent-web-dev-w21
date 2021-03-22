import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class BookRepository {
  private books: Book[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  getBooks(): Book[] {
    return [...this.books]
  }
}
