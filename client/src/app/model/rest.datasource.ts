import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

const PROTOCOL = 'http';
const PORT = 3000; // port as on your backend server

// this is to connect to your backend server
@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getBooks(): Observable<Book[]> {
    let backendRouterPath = 'book/list' // has to be same as on the backend server
    return this.http.get<Book[]>(this.baseUrl + backendRouterPath);
  }

  getABook(id: string): Observable<Book> {
    let backendRouterPath = 'book/'+id // has to be same as on the backend server
    return this.http.get<Book>(this.baseUrl + backendRouterPath);
  }

  updateABook(book: Book): Observable<Book> {
    let backendRouterPath = 'book/'+book._id  // has to be same as on the backend server
    return this.http.post<Book>(this.baseUrl + backendRouterPath, book);
  }

  createABook(book: Book): Observable<Book> {
    let backendRouterPath = 'book/add'  // has to be same as on the backend server
    return this.http.post<Book>(this.baseUrl + backendRouterPath, book);
  }
 
  deleteABook(id: string) {
    let backendRouterPath = 'book/delete/'+id // has to be same as on the backend server
    return this.http.delete(this.baseUrl + backendRouterPath);
  }

}

