import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void {
    this._beerService.findBreweries();
  }

}
