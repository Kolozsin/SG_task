import { Observable } from "rxjs";
import { User } from "src/app/Model/user";
import { UserBackendService } from "src/app/Service/userBackendService/UserBackendService";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
 })
export class UserBackendServiceImpl implements UserBackendService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  

  getRequest(url : String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`, { withCredentials: false });
  }

  postRequest(url: String, outGoingData : object): Observable<any> {
        return this.http.post(`${this.baseUrl}/${url}`, outGoingData, { withCredentials: false });
  }

}