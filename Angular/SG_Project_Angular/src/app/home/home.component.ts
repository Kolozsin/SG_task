import { Component, Inject, NgZone, inject } from '@angular/core';
import { LoginService } from '../Service/loginService/loginService';
import { User } from '../Model/user';
import { Store } from '@ngrx/store';
import { loadUsers, login, logout } from '../store/login.actions';
import { Router } from '@angular/router';
import { AppState } from '../store/login.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  TEXTBOX_U: string = '';
  TEXTBOX_P: string = '';
  userNameList: User[] = [];
  showMessage: boolean = false;
  message: string = "";


  constructor(
    @Inject('LoginService') private loginService: LoginService,
    private router: Router,
    private store: Store<{ appState: AppState }>,
    private ngZone: NgZone) {
    this.loginService.loadAllAccountNames().subscribe(users => {
      this.store.select('appState').subscribe(appState => { this.userNameList = appState.users });
    })
  }

  login = () => {
    if (this.TEXTBOX_U.length == 0 || this.TEXTBOX_P.length == 0) {
      this.message = "Username and/or Password can not be empty!";
      this.showMessage = true;
      return;
    }
    this.loginService.loginAuth(this.TEXTBOX_U, this.TEXTBOX_P).subscribe((isValid) => {
      if (!isValid) {
        this.message = "Username and/or password wrong.";
        this.showMessage = true;
        return;
      }
      else {
        this.store.dispatch(login());
        this.ngZone.run(() => {
          this.router.navigate(['/game']);
        });
      }
    });
  }

  onUserNameClick = (index: number) => {
    this.TEXTBOX_U = this.userNameList[index].userName;
  }

}
