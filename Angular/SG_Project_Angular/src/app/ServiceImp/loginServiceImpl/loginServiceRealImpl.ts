import { Observable, catchError, map, of } from "rxjs";
import { User } from "src/app/Model/user";
import { LoginService } from "../../Service/loginService/loginService";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/login.reducer";
import { UserBackendService } from "src/app/Service/userBackendService/UserBackendService";
import { loadUsers } from "src/app/store/login.actions";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class LoginServiceRealImpl implements LoginService {


    users: User[] = [];


    constructor(private store: Store<{ appState: AppState }>,
        @Inject('BackendService') private userBackendService: UserBackendService) { }


    loadAllAccountNames(): Observable<User[]> {
        this.userBackendService.getAllUsers().subscribe(
            response => {
                this.users = response;
                this.store.dispatch(loadUsers({ users: response }))
            },
            error => {
                console.log('Error loading users:', error);
            }
        );
        return of(this.users);
    }


    loginAuth(userName: string, password: string): Observable<Boolean> {
        return this.userBackendService.loginCheck(userName, password).pipe(
            map(response => response), 
            catchError(error => {
                console.log('Error logging in:', error);
                return of(false);
            })
        );
    }
}