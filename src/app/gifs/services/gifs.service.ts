import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'Pdg1qQxwyuAtnAVE3G2vQjlSNqLPjd0H';
  private _historic: string[] = [];
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historic = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get historic() {
    return [...this._historic];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._historic.includes(query)) {
      this._historic.unshift(query);
      this._historic = this._historic.splice(0, 10);

      //save in the localStorage
      localStorage.setItem('history', JSON.stringify(this._historic));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe(res => {
        this.results = res.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      })

  }
}
