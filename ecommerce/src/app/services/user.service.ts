import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
private httpOptions={}
private isloggedSubject:BehaviorSubject<boolean>
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
  this.isloggedSubject=new BehaviorSubject(this.islogedin)

   }
  register(newUser :User):Observable<User>{
    return this.httpClient.post<User>(`${environment.apiUrl}/users` ,JSON.stringify(newUser),this.httpOptions);
   
  }

  login(){
    let token="1213456789"
    localStorage.setItem('token' , token)
  
  }
  
  logout(){
  localStorage.removeItem('token')
  }

  get islogedin():boolean{
    return (localStorage.getItem('token'))?true :false
  }
  getLoggedStatus():Observable<boolean> {
    return this.isloggedSubject.asObservable();
   }
}
