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



    constructor(private store: Store<{ appState: AppState }>,
        @Inject('BackendService') private userBackendService: UserBackendService) { }


    loadAllAccountNames() {
        this.userBackendService.getRequest("users").subscribe({
            next: (response) => this.store.dispatch(loadUsers({ users: response })),
            error: (e) => console.log(e)
        });

    }


    loginAuth(userName: string, password: string): Observable<boolean> {
        return this.userBackendService.postRequest("login", { userName: userName, password: password }).pipe(
            catchError(error => {
                console.log('Error logging in:', error);
                return of(false);
            })
        );
    }
}