import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  /**
   * @desc constructor
   * @param { HttpClient } _httpClient - http client
   */
  constructor(private _httpClient: HttpClient) { }

  /**
   * @desc Get Breweries
   */
  findBreweries(): void {
    this._httpClient.post('/api/find_breweries', {}).subscribe(data => console.log(data));
  }
}
