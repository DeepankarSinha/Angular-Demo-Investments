import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  /**
   * This component, probably, will be in shared folder in an actual project. 
   */

  @Input() progress = 0;
  progressPercentage = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Turn progress rate to percentage string. This will inturn change the style.width of the bar.
    this.progressPercentage = `${this.progress < 1 ? this.progress * 100 : 100}%`;
  }
}
