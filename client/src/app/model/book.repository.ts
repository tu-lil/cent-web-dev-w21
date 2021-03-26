import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';
import { Router } from '@angular/router';

@Injectable()
export class BookRepository {
  private books: Book[] = [];
  private book: Book;

  constructor(private dataSource: RestDataSource, private router: Router) {
    dataSource.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  getBooks(): Book[] {
    return [...this.books]
  }

  getBookBy(id: string) {
    this.dataSource.getABook(id).subscribe(data => {
      this.book = data
    });
  }

  getBook() {
    return this.book
  }

  updateBook(book: Book) {
    this.dataSource.updateABook(book).subscribe(data => {
      this.book = data
      const updatedBooks = [...this.books];
      const oldBookIndex = updatedBooks.findIndex(p => p._id === this.book._id);
      updatedBooks[oldBookIndex] = this.book;
      this.books = updatedBooks;
      this.router.navigate(['books']);
    });
  }

  createBook(book: Book) {
    this.dataSource.createABook(book).subscribe(data => {
      this.book = data
      const updatedBooks = [...this.books];
      updatedBooks.push(this.book);
      this.books = updatedBooks;
      this.router.navigate(['books']);
    });
  }
}
