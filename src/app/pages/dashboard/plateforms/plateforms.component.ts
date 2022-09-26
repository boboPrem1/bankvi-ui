import { PlateformService } from './../../../services/plateform.service';
import { Component, OnInit } from '@angular/core';
import { Plateform } from 'src/app/types/plateform';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-plateforms',
  templateUrl: './plateforms.component.html',
  styleUrls: ['./plateforms.component.scss'],
})
export class PlateformsComponent implements OnInit {
  plateformList: Plateform[] = [];

  constructor(
    private plateformService: PlateformService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<any> {
    const response = await this.authService.getPlateformList();
    this.plateformList = response.data;
  }
}
