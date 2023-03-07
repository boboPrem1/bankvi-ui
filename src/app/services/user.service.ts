import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token = '';
  user: User = {
    id: 0,
    username: '',
    firstname: '',
    lastname: '',
    tel: '',
    email: '',
    role: 1,
    password: '',
    created_at: '',
    updated_at: '',
  };

  userList: User[] = [
    {
      id: 1,
      username: 'VBoSS',
      firstname: 'Kangni Juvanio',
      lastname: 'Amouzougan',
      tel: '0022896858912',
      email: 'jamouzougan@gmail.com',
      role: 1,
      password: 'kinyubi',
      created_at: Date.now().toLocaleString(),
      updated_at: Date.now().toLocaleString(),
    },
    {
      id: 2,
      username: 'VBoSS',
      firstname: 'Kangni Juvanio',
      lastname: 'Amouzougan',
      tel: '0022896858912',
      email: 'jamouzougan@gmail.com',
      role: 1,
      password: 'kinyubi',
      created_at: Date.now().toLocaleString(),
      updated_at: Date.now().toLocaleString(),
    },
    {
      id: 3,
      username: 'VBoSS',
      firstname: 'Kangni Juvanio',
      lastname: 'Amouzougan',
      tel: '0022896858912',
      email: 'jamouzougan@gmail.com',
      role: 1,
      password: 'kinyubi',
      created_at: Date.now().toLocaleString(),
      updated_at: Date.now().toLocaleString(),
    },
    {
      id: 4,
      username: 'VBoSS',
      firstname: 'Kangni Juvanio',
      lastname: 'Amouzougan',
      tel: '0022896858912',
      email: 'jamouzougan@gmail.com',
      role: 1,
      password: 'kinyubi',
      created_at: Date.now().toLocaleString(),
      updated_at: Date.now().toLocaleString(),
    },
  ];

  constructor() {}
}
