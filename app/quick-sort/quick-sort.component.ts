import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent {

  quicksort: string = "all";

  @Output() filteredCategory: EventEmitter<string> = new EventEmitter<string>();

  Onfilter() {
    if(!this.quicksort) {
      this.quicksort = "all";
    } else {
      this.filteredCategory.emit(this.quicksort);
    }
  }
}
