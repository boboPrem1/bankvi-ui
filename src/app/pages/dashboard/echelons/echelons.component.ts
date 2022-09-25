import { EchelonService } from './../../../services/echelon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echelons',
  templateUrl: './echelons.component.html',
  styleUrls: ['./echelons.component.scss']
})
export class EchelonsComponent implements OnInit {

echelonList: any;

  constructor(private echelonService: EchelonService) { }

  ngOnInit(): void {
    this.echelonList = this.echelonService.echelonList;
  }

}
