import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { ResUn } from '../types/res-un';
import { TokAuth } from '../types/tok-auth';
import { UserService } from './user.service';
import { ResDeux } from '../types/res-deux';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToSignUp = {
    tel: '',
    name: '',
    prenom: '',
    pseudo: '',
    email: '',
    pass: '',
    role: 1,
  };
  objetReponseAuth: ResUn = {
    status: '',
    message: '',
  };
  tokenResponse: TokAuth = {
    access_token: '',
  };
  signInData = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient, private userService: UserService) {}

  addUser() {
    const data = {
      tel: this.userToSignUp.tel,
      firstname: this.userToSignUp.prenom,
      lastname: this.userToSignUp.name,
      username: this.userToSignUp.pseudo,
      password: this.userToSignUp.pass,
      role: this.userToSignUp.role,
      email: this.userToSignUp.email,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // ,Authorization: 'my-auth-token'
      }),
    };
    const url = 'http://localhost:3000/users';

    const request = $.ajax({
      method: 'POST',
      url: url,
      data: data,
    });

    return request.done(function (msg: ResUn) {
      return {
        status: msg.status,
        message: msg.message,
      };
    });

    //return this.http.post(url, JSON.stringify(data), httpOptions);
  }

  signIn() {
    const data = {
      username: this.signInData.username,
      password: this.signInData.password,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // ,Authorization: 'my-auth-token'
      }),
    };
    const url = 'http://localhost:3000/auth/login';

    const request = $.ajax({
      method: 'POST',
      url: url,
      data: data,
    });

    return request.done(function (msg: TokAuth) {
      return {
        access_token: msg.access_token,
      };
    });
  }

  getUser(): any {
    const token = this.tokenResponse.access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //Authorization: this.tokenResponse.access_token,
      }),
    };
    const url = `http://localhost:3000/users/get/${this.signInData.username}`;

    const request = $.ajax({
      method: 'GET',
      url: url,
      dataType: 'JSON',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      },
    });

    return request.done(function (data: ResDeux) {
      return {
        status: data.status,
        data: data.data,
      };
    });
  }

  getUserList(): any {
    const token = this.tokenResponse.access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //Authorization: this.tokenResponse.access_token,
      }),
    };
    const url = `http://localhost:3000/users`;

    const request = $.ajax({
      method: 'GET',
      url: url,
      dataType: 'JSON',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      },
    });

    return request.done(function (data: ResDeux) {
      return {
        status: data.status,
        data: data.data,
      };
    });
  }

  getProductList(): any {
    const token = this.tokenResponse.access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //Authorization: this.tokenResponse.access_token,
      }),
    };
    const url = `http://localhost:3000/products`;

    const request = $.ajax({
      method: 'GET',
      url: url,
      dataType: 'JSON',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      },
    });

    return request.done(function (data: ResDeux) {
      return {
        status: data.status,
        data: data.data,
      };
    });
  }

  getEchelonList(): any {
    const token = this.tokenResponse.access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //Authorization: this.tokenResponse.access_token,
      }),
    };
    const url = `http://localhost:3000/echelons`;

    const request = $.ajax({
      method: 'GET',
      url: url,
      dataType: 'JSON',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      },
    });

    return request.done(function (data: ResDeux) {
      return {
        status: data.status,
        data: data.data,
      };
    });
  }

  getPlateformList(): any {
    const token = this.tokenResponse.access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //Authorization: this.tokenResponse.access_token,
      }),
    };
    const url = `http://localhost:3000/plateforms`;

    const request = $.ajax({
      method: 'GET',
      url: url,
      dataType: 'JSON',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      },
    });

    return request.done(function (data: ResDeux) {
      return {
        status: data.status,
        data: data.data,
      };
    });
  }
}
