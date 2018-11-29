import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  user:User;
  private BASEURL = "localhost:8888";
  private loginURL = "/login"
  private createURL = "/newaccount"

  
  mockUser:User = {
    id: 1,
    name: 'Aaron',
    company: 'ClockPunchr Inc.'
  }



  login(username, password):Observable<any>{
    const url = this.BASEURL + this.loginURL;
    const data = {
      name: username,
      password: password
    }
    return this.http.post<User>(url, data).pipe(
      tap(_ => console.log('logged in')),
      catchError(this.handleError('login', []))
    )


    // this.user = this.mockUser;
    // return of(this.user);
  }

  createAccount(name, password, company):Observable<User>{
    //TODO
    this.mockUser.name = name;
    this.mockUser.company = company;
    this.user = this.mockUser;


    return of(this.user);
  }
  getUser():Observable<User>{
    return of(this.user);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
