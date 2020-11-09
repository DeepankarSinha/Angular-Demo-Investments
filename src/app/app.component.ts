import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Using the main component to display cards as well as handle pagination.
   */

  items = []; // Array to store properties of a card.
  pages = []; // Stores the page numbers.
  take = 10; // Total cards to show in a page.
  skip = 0; // Total cards to skip while showing a page.
  currentPage = 1; // Stores the current page number.

  constructor() {
    // We will quickly, generate some random properties for the card and populate our items array.
    this.setItems(50);
    this.setPages();
  }

  /**
   * Add items.
   * @param count Number of item to generate.
   */
  setItems(count: number){
    this.items = [];

    for(let i = 0; i < count; i++){
      const targetAmount = Math.random() * 10000;
      this.items.push({
        title: `Title ${i}`,
        location: `80-${i} Street road, far away`,
        currentInvestedAmount: Math.random()*10000,
        targetInvestmentAmount: targetAmount,
        description: `${i} newly built attic apartments and 32 renovated apartments in old buildings in 1160 Vienna`,
        startDate: Date.now(),
        endDate: Date.now() + 10000
      })
    }
  }

  /**
   * Set the page number in pages array.
   */
  setPages() {
    this.pages = [];
    let i = 1;
    while(i < this.items.length / this.take){
      this.pages.push(i++);
    }
  }

  /**
   * Filter the items.
   * @param items Items to filter from.
   * @param take Total items to take.
   * @param skip Pages to skip.
   */
  filter(items, take, skip){
    const startIndex = take*skip;
    const result = items.slice(startIndex, startIndex + take);
    skip += take; // Update the skip.

    return result;
  }

  /**
   * Go to a page specified by a page number.
   * @param pageNumber Page number
   */
  goto(pageNumber: number){
    if(pageNumber > 0 && pageNumber <= this.pages.length){ // Check if page number is valid.
      this.currentPage = pageNumber;
      this.skip = pageNumber-1; // Logically skip will be one less than pageNumber.
    }
  }

  /**
   * Go to previous page number.
   */
  gotoPrev(){
    if(this.skip !== 0){
      this.currentPage--;
      this.skip--;
    }
  }

  /**
   * Go to next page number.
   */
  gotoNext(){
    if(this.skip < this.pages.length - 1){
      this.currentPage++;
      this.skip++;
    }
  }
}
