import { AuthService } from './../../../services/auth.service';
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
  tel = '';
  name = '';
  prenom = '';
  email = '';
  pass = '';
  userCode: any;
  code = 123123;

  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    if(this.authService.userToSignUp.tel){
      this.tel = this.authService.userToSignUp.tel
    }else{
      this.router.navigate(['']);
    }
  }

  onSend(e: any) {
    e.preventDefault();
    if(this.userCode && this.userCode === this.code){
      this.router.navigate(['more-infos']);
    }
  }
}
