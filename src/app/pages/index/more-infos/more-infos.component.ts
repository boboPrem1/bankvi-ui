import { ResUn } from './../../../types/res-un';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-infos',
  templateUrl: './more-infos.component.html',
  styleUrls: ['./more-infos.component.scss']
})
export class MoreInfosComponent implements OnInit {
  tel= '';
  name = '';
  pseudo = '';
  prenom = '';
  email = '';
  pass = '';
  conf_pass = '';
  role_string = 'standard';
  role = 0;
  regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(private router: Router,
   private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.userToSignUp.tel){
      this.tel = this.authService.userToSignUp.tel
    }else{
      this.router.navigate(['']);
    }
  }

  async onSend(e: any): Promise<ResUn>{
    e.preventDefault();
    if(this.tel &&
      this.name &&
      this.pseudo &&
      this.prenom &&
      this.role_string &&
      this.pass === this.conf_pass){
        if(this.email){
          if(!this.regex_email.test(this.email)){
            return false;
          }
        }
          this.authService.userToSignUp.tel = this.tel;
          this.authService.userToSignUp.name = this.name;
          this.authService.userToSignUp.pseudo = this.pseudo;
          this.authService.userToSignUp.prenom = this.prenom;
          this.authService.userToSignUp.pass = this.pass;
          this.authService.userToSignUp.email = this.email;
          this.authService.userToSignUp.role = this.role_string == "standard" ? 1 : 2;
          // console.log(this.authService.userToSignUp);
          const response = this.authService.addUser();
          return await response.suscribe(
            data => {
              return data;
            }
          )
    }
    // this.router.navigate(['dashboard']);
  }
}
