import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book.model';
import { BookRepository } from '../../model/book.repository';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})

export class BookAddComponent implements OnInit {

  constructor(private repository: BookRepository) { }

  ngOnInit(): void {
  }

  onCreateBook(form: NgForm) {
    if(form.invalid){
      return;
    }
    
    let newBook = new Book ();
    newBook.name= form.value.name;
    newBook.author= form.value.author;
    newBook.description= form.value.description;
    newBook.published= form.value.published;
    newBook.price= form.value.price;

    this.repository.createBook(newBook);
    form.resetForm();
  }

}
