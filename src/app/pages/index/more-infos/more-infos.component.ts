import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-infos',
  templateUrl: './more-infos.component.html',
  styleUrls: ['./more-infos.component.scss']
})
export class MoreInfosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSend() {
    this.router.navigate(['dashboard']);
  }
}
