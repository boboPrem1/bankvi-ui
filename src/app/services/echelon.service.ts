import { Injectable } from '@angular/core';
import { Echelon } from '../types/echelon';

@Injectable({
  providedIn: 'root'
})
export class EchelonService {
echelonList: Echelon[] = [
  {
    id: 1,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 2,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 3,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 4,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 5,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 6,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 7,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  },
  {
    id: 8,
    payement_method: "Flooz",
    done_steps: 0,
    payed: 0,
    progress_state: "todo"
  }
]
  constructor() { }
}
