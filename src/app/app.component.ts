import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SearchQuery } from './models/search-query';
import { SearchClear } from './store/search-query.actions';
import { ClearBusinesses } from './store/businesses.actions';
import { Location } from '@angular/common';
import { MainPageSearch } from './store/main-page.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// AppComponent contains our main toolbar across the top and is always shown to the user
// AppComponent also contains the router outlet for the different pages in the app
// It dynamically shows and hides some buttons based on what is the current
// page (router-outlet) and the progress of the user on that page.
// For example, when on the review page, a "save" button appears in the toolbar
// only after the user has started a review.
// Another example: on the Main page, show the "search" button only if the user
// has entered text into the search box

export class AppComponent implements OnInit {

  searchQuery$: Observable<SearchQuery>;

  routerUrl$ = new Subject<string>();
  routerUrl: string;

  constructor(private router: Router, private location: Location,
              private store: Store<{ searchQuery: SearchQuery }>) {
      this.searchQuery$ = store.pipe(select('searchQuery'));

  }

  ngOnInit(): void {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe( e => {
      this.routerUrl$.next(e.url);
      this.routerUrl = e.url;
    });
  }

  // From the Main page
  onSearchClick(): void {
    this.store.dispatch(MainPageSearch());
  }

  // User can click logo and go to the Main page from any page. It clears all search strings and results.
  // However, when on the review page, check if a revew has been started
  // and confirm user wants to cancel the review in-progress
  onLogoClick(): void {
    this.ClearAllNavigateHome();
  }

  private ClearAllNavigateHome(): void {
    this.store.dispatch(SearchClear());
    this.store.dispatch(ClearBusinesses());
    this.router.navigate(['/']);
  }

}
