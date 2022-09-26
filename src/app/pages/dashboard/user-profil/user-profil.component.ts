import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../types/user';
import { ResDeux } from '../../../types/res-deux';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  user: User = {
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
  };

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<any> {
    const response2: ResDeux = await this.authService.getUser();
    const user = response2.data;
    this.userService.user.id = user.id;
    this.userService.user.tel = user.tel;
    this.userService.user.username = user.username;
    this.userService.user.password = user.password;
    this.userService.user.lastname = user.lastname;
    this.userService.user.firstname = user.firstname;
    this.userService.user.email = user.email;
    this.userService.user.role = user.role;
    this.userService.user.created_at = user.created_at;
    this.userService.user.updated_at = user.updated_at;

    this.user.id = this.userService.user.id;
    this.user.tel = this.userService.user.tel;
    this.user.username = this.userService.user.username;
    this.user.password = this.userService.user.password;
    this.user.lastname = this.userService.user.lastname;
    this.user.firstname = this.userService.user.firstname;
    this.user.email = this.userService.user.email;
    this.user.role = this.userService.user.role;
    this.user.created_at = this.userService.user.created_at;
    this.user.updated_at = this.userService.user.updated_at;
  }
}
