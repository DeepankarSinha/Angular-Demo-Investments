import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  
  /**
   * This component, probably, will be in a shared folder in an actual project. 
   */

  // Input variables with some default values.
  @Input() status = 'Open For Investment';
  @Input() title = 'Schuhmeierplatz 13';
  @Input() location = 'Döblinger Hauptstraße 82/2a, 1190 Wien, Austria';
  @Input() currentInvestedAmount = 0;
  @Input() targetInvestmentAmount = 50000;
  @Input() description = '13 newly built attic apartments and 32 renovated apartments in old buildings in 1160 Vienna';
  @Input() startDate = Date.now();
  @Input() endDate = Date.now();
  
  progress = 50;
  investmentCompleted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Check if the target investment has reached.
    this.investmentCompleted = this.currentInvestedAmount >= this.targetInvestmentAmount;
    // Calculate the progress for current investment.
    this.progress = this.currentInvestedAmount / this.targetInvestmentAmount;
  }
}
