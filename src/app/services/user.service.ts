import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    id: 1,
    username: "VBoSS",
    firstname: "Kangni Juvanio",
    lastname: "Amouzougan",
    tel: "0022896858912",
    email: "jamouzougan@gmail.com",
    role: 1,
    password: "kinyubi",

  }
  userList: User[] = [
    {
      id: 1,
      username: "VBoSS",
      firstname: "Kangni Juvanio",
      lastname: "Amouzougan",
      tel: "0022896858912",
      email: "jamouzougan@gmail.com",
      role: 1,
      password: "kinyubi",
  
    },
    {
    id: 2,
    username: "VBoSS",
    firstname: "Kangni Juvanio",
    lastname: "Amouzougan",
    tel: "0022896858912",
    email: "jamouzougan@gmail.com",
    role: 1,
    password: "kinyubi",

  },
  {
    id: 3,
    username: "VBoSS",
    firstname: "Kangni Juvanio",
    lastname: "Amouzougan",
    tel: "0022896858912",
    email: "jamouzougan@gmail.com",
    role: 1,
    password: "kinyubi",

  },
  {
    id: 4,
    username: "VBoSS",
    firstname: "Kangni Juvanio",
    lastname: "Amouzougan",
    tel: "0022896858912",
    email: "jamouzougan@gmail.com",
    role: 1,
    password: "kinyubi",

  }
  ]
  constructor() { }
}
