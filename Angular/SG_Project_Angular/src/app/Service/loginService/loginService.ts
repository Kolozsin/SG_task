import { Observable } from "rxjs";
import { User } from "../../Model/user";

/**
 * This is used for the account related functions.
 */
export interface LoginService {
    
    /**
     * Loads in all the currently stored users
     * so it can be presented on the home page.
     */
    loadAllAccountNames() : Observable<User[]>;
    

    /**
     * Checks whether the given username and
     * password combination is valid.
     * 
     * @param userName Username you try to login with
     * @param password Password you try to login with
     */
    loginAuth(userName : string, password : string, userListParam : User[]) : Observable<boolean>;
}
