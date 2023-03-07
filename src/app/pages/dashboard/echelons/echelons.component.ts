import { EchelonService } from './../../../services/echelon.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-echelons',
  templateUrl: './echelons.component.html',
  styleUrls: ['./echelons.component.scss'],
})
export class EchelonsComponent implements OnInit {
  echelonList: any;

  constructor(
    private echelonService: EchelonService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<any> {
    const response = await this.authService.getEchelonList();
    this.echelonList = response.data;

    console.log(response.data);
  }
}
