import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  /**
   * This component, probably, will be in shared folder in an actual project. 
   * It is a very simple implementation of info card. Pretty useless for now.
   */

  showCard = false; // This will be true when you hover your mouse on 'i' icon else false.

  // Static items but can be turned into component input.
  items = ['Item1',
  'Item2',
  'item3',
  'Item4', 
  'Item5'];

  constructor() { }

  ngOnInit(): void {
  }

}
