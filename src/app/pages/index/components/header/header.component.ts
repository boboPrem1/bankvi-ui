import { UserService } from './../../../../services/user.service';
import { User } from '../../../../types/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = '../../../../../assets/images/logo_blanc.png';

  user: any;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.user = this.userService.user
  }
}
