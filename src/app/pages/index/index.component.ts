import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  logo = '../../../assets/images/logo_blanc.png';
  prefixe_img_path = '../../../assets/images/';
  img1_right_path = this.prefixe_img_path + 'services_image1.jpg';
  img_connector_path = this.prefixe_img_path + 'connecteur_img.png';
  img2_left_path = this.prefixe_img_path + 'paiementplusieursfos.png';
  facebook = faFacebook;
  twitter = faTwitter;
  linkedin = faLinkedin;
  instagram = faInstagram;
  @Input() tel = '';
  @Input() conn_pseudo = '';
  @Input() conn_pass = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  getLinks() {
    const links = document.querySelectorAll('.links_container a span');
    console.log(links);
  }

  clickLinks(link: string, e: any) {
    e.preventDefault();
    switch (link) {
      case 'accueil':
        // @ts-ignore
        document.querySelector('.header_container').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
        break;
      case 'connexion':
        // @ts-ignore
        document.querySelector('.menu_con').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
        break;
      case 'about':
        // @ts-ignore
        document.querySelector('.about').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
        break;
      case 'contact':
        // @ts-ignore
        document.querySelector('.footer').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
        break;
    }
  }

  onSignUp(e: any) {
    e.preventDefault();
    if (this.tel && this.tel.length === 8) {
      this.authService.userToSignUp.tel = this.tel;
      // console.log(this.authService.userToSignUp);
      this.router.navigate(['validate']);
    } else {
      console.log('Entrées incorrect');
    }
  }

  async onSignIn(e: any) {
    e.preventDefault();
    if (this.conn_pseudo && this.conn_pass) {
      this.authService.signInData.username = this.conn_pseudo;
      this.authService.signInData.password = this.conn_pass;

      const response = await this.authService.signIn();
      this.authService.tokenResponse.access_token = response.access_token;
      this.userService.token = response.access_token;

      console.log(response.access_token);

      //console.log(user);
      await this.router.navigate(['dashboard']);
    }
  }
}
