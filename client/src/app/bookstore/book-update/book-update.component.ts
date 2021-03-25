import { Component, OnInit } from '@angular/core';
import { BookRepository } from '../../model/book.repository';
import { Book } from '../../model/book.model';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { NgForm } from '@angular/forms'

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

  onUpdateBook(form: NgForm) {
    if(form.invalid){
      return;
    }
    
    let updatedBook = new Book ();
    updatedBook._id = this.bookId;
    updatedBook.name= form.value.name;
    updatedBook.author= form.value.author;
    updatedBook.description= form.value.description;
    updatedBook.published= form.value.published;
    updatedBook.price= form.value.price;

    this.repository.updateBook(updatedBook);
    form.resetForm();
  }

  get book(): Book {
    return this.repository.getBook();
  }
}
