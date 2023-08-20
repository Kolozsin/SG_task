import { Observable } from "rxjs";
import { User } from "src/app/Model/user";


export interface UserBackendService{

   getRequest(url : String) : Observable<any>;

   postRequest(url : String, outGoingData : Object ) : Observable<any>;

}