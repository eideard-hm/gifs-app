import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private _gifsService: GifsService) { }

  get historic() {
    return this._gifsService.historic;
  }

  buscar(query: string) {
    this._gifsService.searchGifs(query);
  }
}
