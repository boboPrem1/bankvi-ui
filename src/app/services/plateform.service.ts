import { Injectable } from '@angular/core';
import { Plateform } from '../types/plateform';

@Injectable({
  providedIn: 'root'
})
export class PlateformService {
plateformList: Plateform[] = [
  {
    id: 1,
    name: "Amazon"
  },
  {
    id: 2,
    name: "Alibaba"
  },
]
  constructor() { }
}
