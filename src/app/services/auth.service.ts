import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const AUTH_API = 'https://localhost:5001/api/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Login(authInfo: any){
    return this.http.post(AUTH_API+"/login",authInfo,httpOptions);
  }
  Register(registerInfo: any){
    return this.http.post(AUTH_API,registerInfo,httpOptions)
  }
  getUser(id:number){
    return this.http.get(AUTH_API+"/"+id);
  }
}
