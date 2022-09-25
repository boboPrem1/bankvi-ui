import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.userList;
  }

}
