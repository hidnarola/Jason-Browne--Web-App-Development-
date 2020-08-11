import { SearchQueryStringSet, SearchLocationStringSet, SearchCoordinatesSet } from './../../store/search-query.actions';
import { SearchQuery } from './../../models/search-query';
import { Component, OnInit } from '@angular/core';
import { CoordinatesGeography } from 'src/app/models/coordinates-geograpy';
import { Business } from 'src/app/models/business';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainPageSearch } from 'src/app/store/main-page.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  businesses: Observable<Business[]>;
  searchQuery: Observable<SearchQuery>;

  constructor(private router: Router, private store: Store<{ businesses: Business[], searchQuery: SearchQuery }>) {
    this.businesses = store.pipe(select('businesses'));
    this.searchQuery = store.pipe(select('searchQuery'));
  }

  ngOnInit(): void { }

  onBusinessSelect(business: Business): void {
  }

  onEnterKeyPress(): void {
    this.store.dispatch(MainPageSearch());
  }

  onSearchQueryStringChange(searchQueryString: string): void {
    this.store.dispatch(SearchQueryStringSet({payload: searchQueryString}));
  }

  onLocationStringChange(locationString: string): void {
    this.store.dispatch(SearchLocationStringSet({payload: locationString}));
  }

  onCoordinatesChange(coordinates: CoordinatesGeography): void {
    this.store.dispatch(SearchCoordinatesSet({payload: coordinates}));
  }

}
