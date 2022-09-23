import { Component, OnInit } from '@angular/core';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.scss'],
})
export class MainIndexComponent implements OnInit {
  prefixe_img_path = '../../../../../assets/images/';
  img1_right_path = this.prefixe_img_path + 'services_image1.jpg';
  img_connector_path = this.prefixe_img_path + 'connecteur_img.png';
  img2_left_path = this.prefixe_img_path + 'paiementplusieursfos.png';
  // faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}
}
