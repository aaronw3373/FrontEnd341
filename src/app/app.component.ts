import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClockPunchr';

  user = {
    name:"Aaron"
  }

  loginField = {
    username: '',
    password: ''
  }

  logout(){
    console.log("Logout Command")
  }
  login(){
    console.log("Logout Command: " + this.loginField.username + " : " + this.loginField.password)
  }
  createUser(){
    console.log("Create User Command")
  }

}
