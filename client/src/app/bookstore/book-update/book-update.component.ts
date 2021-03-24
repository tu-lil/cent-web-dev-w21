import { Component, OnInit } from '@angular/core';
import { BookRepository } from '../../model/book.repository';
import { Book } from '../../model/book.model';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  private bookId: string;

  constructor(private repository: BookRepository, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.bookId = paramMap.get('bookId');
      this.repository.getBookBy(this.bookId)
    });
  }

  get book(): Book {
    return this.repository.getBook();
  }
}
