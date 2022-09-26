import { PlateformService } from './../../../services/plateform.service';
import { Component, OnInit } from '@angular/core';
import { Plateform } from 'src/app/types/plateform';

@Component({
  selector: 'app-plateforms',
  templateUrl: './plateforms.component.html',
  styleUrls: ['./plateforms.component.scss']
})
export class PlateformsComponent implements OnInit {
plateformList: Plateform[] = [];
  constructor(private plateformService: PlateformService) { }

  ngOnInit(): void {
    this.plateformList = this.plateformService.plateformList;
  }

}
