import { UserService } from './../../services/user.service';
import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  logo = '../../../assets/images/logo_blanc.png';

  user: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
