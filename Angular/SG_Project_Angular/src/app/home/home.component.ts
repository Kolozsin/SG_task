import { Component, Inject, inject } from '@angular/core';
import { LoginService } from '../Service/loginService';
import { User } from '../Model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  TEXTBOX_U: string = '';
  TEXTBOX_P: string = '';
  userNameList: User[] = [];


  constructor(
    @Inject('LoginService') private loginService: LoginService) {
    this.loginService.loadAllAccountNames().subscribe(users => {
      this.userNameList = users;
      console.log(this.userNameList); 
    })
  }

  login = () => {
    if (this.TEXTBOX_U.length == 0 || this.TEXTBOX_P.length == 0) {
      //In production I would create a modal for this
      console.log("Username and Password can not be empty!");
      return;
    }
    this.loginService.loginAuth(this.TEXTBOX_U, this.TEXTBOX_P).subscribe((isValid) => {
      if (!isValid) {
        console.log("ERROR while logging in, username or password wrong.")
        return;
      }
      else {
        console.log("Successfully logged in.")
      }
    });
  }

  onUserNameClick = (index: number) => {
    this.TEXTBOX_U = this.userNameList[index].userName;
  }

}
