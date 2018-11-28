import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClockPunchr';

  user;

  loginField = {
    username: '',
    password: ''
  }

  logout(){
    console.log("Logout Command")
    this.user = undefined;
    this.loginField = {
      username: '',
      password: ''
    }
  }
  login(){
    console.log("Login Command: " + this.loginField.username + " : " + this.loginField.password)
    this.user = { name: this.loginField.username }
    this.loginField = {
      username: '',
      password: ''
    }
    // Do Login, when I get user object back save it as user
  }
  createUser(){
    console.log("Create User Command")
  }

}
