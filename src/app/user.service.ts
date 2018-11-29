import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  user:User;
  
  mockUser:User = {
    id: 1,
    name: 'Aaron',
    company: 'ClockPunchr Inc.'
  }

  login(username, password):Observable<User>{
    //TODO
    this.user = this.mockUser;


    return of(this.user);
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
}
