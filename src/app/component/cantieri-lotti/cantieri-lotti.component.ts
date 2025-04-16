import { Component } from '@angular/core';
import {LottiListComponent} from './lotti-list/lotti-list.component';
import {CantieriListComponent} from './cantieri-list/cantieri-list.component';


@Component({
  selector: 'app-cantieri-lotti',
  imports: [
    LottiListComponent,
    CantieriListComponent
  ],
  templateUrl: './cantieri-lotti.component.html',
  styleUrl: './cantieri-lotti.component.css'
})
export class CantieriLottiComponent {

}
