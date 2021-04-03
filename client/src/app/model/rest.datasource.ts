import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const PROTOCOL = 'https';
const PORT = 3000; // port as on your backend server

// this is to connect to your backend server
@Injectable()
export class RestDataSource {
  private baseUrl: string;
  private authToken: string;
  private user: User;

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
    this.loadToken();
    let backendRouterPath = 'book/list' // has to be same as on the backend server
    return this.http.get<Book[]>(this.baseUrl + backendRouterPath,  this.httpOptions);
  }

  getABook(id: string): Observable<Book> {
    this.loadToken();
    let backendRouterPath = 'book/'+id // has to be same as on the backend server
    return this.http.get<Book>(this.baseUrl + backendRouterPath,  this.httpOptions);
  }

  updateABook(book: Book): Observable<Book> {
    this.loadToken();
    let backendRouterPath = 'book/'+book._id  // has to be same as on the backend server
    return this.http.post<Book>(this.baseUrl + backendRouterPath, book,  this.httpOptions);
  }

  createABook(book: Book): Observable<Book> {
    this.loadToken();
    let backendRouterPath = 'book/add'  // has to be same as on the backend server
    return this.http.post<Book>(this.baseUrl + backendRouterPath, book,  this.httpOptions);
  }
 
  deleteABook(id: string) {
    this.loadToken();
    let backendRouterPath = 'book/delete/'+id // has to be same as on the backend server
    return this.http.delete(this.baseUrl + backendRouterPath, this.httpOptions);
  }

  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'users/login', user, this.httpOptions);
  }

  logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'users/logout', this.httpOptions);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    if(token){
      this.authToken = token;
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
  }

}

