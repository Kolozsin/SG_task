import { Injectable } from "@angular/core";
import { LoginService } from "../Service/loginService";
import { User } from "../home/Model/user";
import { Observable, delay, of } from "rxjs";


/**
 * This implementation of the @LoginService is mocking the call 
 * to the backend. It has an internal list of users that can not be
 * modified or accessed by others.
 */
@Injectable({
 providedIn: 'root',
})
export class LoginServiceMockedImpl implements LoginService{


    
    private userList: User[] = [
        { id: 0, userName: 'User1' },
        { id: 1, userName: 'User2' },
        { id: 2, userName: 'User3' },
        { id: 3, userName: 'User4' },
        { id: 4, userName: 'User5' },
        { id: 5, userName: 'User6' }
      ];


    private passwordList: { id: number; password: string }[] = [
       { id: 0, password: 'test' },
       { id: 1, password: 'test1' },
       { id: 2, password: 'test2' },
       { id: 3, password: 'test3' },
       { id: 4, password: 'test4' },
       { id: 5, password: 'test5' },
    ];


    loadAllAccountNames(): Observable<User[]> {
        return of(this.userList).pipe(delay(1000));
    }

    loginAuth(userName: string, password: string): Observable<boolean> {
        let isValid : boolean = false;
        let user=  this.userList.find( u => u.userName === userName);
        let userId = user ? user.id : null;
        if(userId != null){
            let pw = this.passwordList.find(p => p.password === password);
            let passwordId = pw ? pw.id : null;
            if(passwordId != null && passwordId === userId){
                isValid = true;
            }
        }
        return of(isValid).pipe(delay(1000));
    }

}