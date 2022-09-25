import { Component, OnInit } from '@angular/core';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-tel',
  templateUrl: './validate-tel.component.html',
  styleUrls: ['./validate-tel.component.scss'],
})
export class ValidateTelComponent implements OnInit {
  // arrowLeft = faArrowLeft;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSend() {
    this.router.navigate(['more-infos']);
  }
}
