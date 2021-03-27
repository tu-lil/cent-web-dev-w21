import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const PROTOCOL = 'http';
const PORT = 3000; // port as on your backend server

// this is to connect to your backend server
@Injectable()
export class RestDataSource {
  baseUrl: string;
  authToken: string;
  user: User;

  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
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

  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

}

