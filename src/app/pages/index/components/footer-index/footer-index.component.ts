import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer-index',
  templateUrl: './footer-index.component.html',
  styleUrls: ['./footer-index.component.scss']
})
export class FooterIndexComponent implements OnInit {
facebook = faFacebook;
twitter = faTwitter;
linkedin = faLinkedin;
instagram = faInstagram;
constructor() { }

  ngOnInit(): void {
  }

}
