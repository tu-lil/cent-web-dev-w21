import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})

export class BookstoreComponent implements OnInit {

  constructor(private repository: BookRepository) {
  }

  ngOnInit(): void {
  }

  get books(): Book[] {
    return this.repository.getBooks();
  }
}
