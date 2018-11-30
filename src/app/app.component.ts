import { Component } from '@angular/core';
import { UserService } from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClockPunchr';

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  user;

  loginField = {
    username: '',
    password: ''
  }


  createField = {
    name: '',
    password: '',
    company: '',
  }

  logout(){
    // console.log("Logout Command")
    this.user = undefined;
    this.loginField = {
      username: '',
      password: ''
    }
    this.router.navigateByUrl('/');
  }

  login(){
    // console.log("Login Command: " + this.loginField.username + " : " + this.loginField.password)
    this.userService.login(this.loginField.username, this.loginField.password)
    .subscribe(res =>  {
      console.log(res);
      if (res[0] != undefined){
        if (res[0].name != undefined){
          this.user = res[0];
        }
      }      
    });
    this.loginField = {
      username: '',
      password: ''
    }
    this.router.navigateByUrl('/');
  }

  createUser(){
    // console.log("Create User Command")
    this.userService.createAccount(this.createField.name, this.createField.password, this.createField.company)
    .subscribe(res =>  {
      console.log(res);
      if (res[0] != undefined){
        if (res[0].name != undefined){
          this.user = res[0];
        }
      }      
    });
    this.createField = {
      name: '',
      password: '',
      company: '',
    }
    this.router.navigateByUrl('/');
  }

}
