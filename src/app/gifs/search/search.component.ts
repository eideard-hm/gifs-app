import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private _gifsService: GifsService
  ) {

  }

  search() {
    if (this.txtSearch.nativeElement.value.trim().length >= 2) {
      this._gifsService.searchGifs(this.txtSearch.nativeElement.value);
      this.txtSearch.nativeElement.value = '';
    }
  }
}
