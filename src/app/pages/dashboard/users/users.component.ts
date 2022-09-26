import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: any;
  onModifie = false;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<any> {
    const response = await this.authService.getUserList();
    this.userList = response.data;
  }

  onModif() {
    this.onModifie = true;
  }

  onSaved() {
    this.onModifie = false;
  }
}
