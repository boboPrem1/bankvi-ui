import { ResUn } from './../types/res-un';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userToSignUp = {
  tel: '',
  name: '',
  prenom: '',
  pseudo: '',
  email: '',
  pass: '',
  role: 1
};
  constructor(private http: HttpClient) { }

  addUser(): any{
    const data = {
      tel: this.userToSignUp.tel,
      firstname: this.userToSignUp.prenom,
      lastname: this.userToSignUp.name,
      username: this.userToSignUp.pseudo,
      password: this.userToSignUp.pass,
      role: this.userToSignUp.role,
      email: this.userToSignUp.email
    };
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
    const url = 'http://localhost:3000/users';

    return this.http.post(url, JSON.stringify(data), httpOptions);
  }

  signIn(){
    
  }
}
