import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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

  onSignUp() {
    this.router.navigate(['validate']);
  }
}
