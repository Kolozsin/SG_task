import { Observable } from "rxjs";
import { User } from "src/app/Model/user";


export interface UserBackendService{

    getAllUsers() : Observable<User[]>;

    loginCheck(userName : String, password: String) : Observable<Boolean>;


}