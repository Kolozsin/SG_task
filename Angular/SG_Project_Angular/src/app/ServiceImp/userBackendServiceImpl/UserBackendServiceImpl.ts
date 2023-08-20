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

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`, { withCredentials: false });

  }

  loginCheck(username: string, password: string): Observable<any> {
    const loginData = { id: 0, userName: username, password: password };
    return this.http.post(`${this.baseUrl}/login`, loginData, { withCredentials: false });
  }

}