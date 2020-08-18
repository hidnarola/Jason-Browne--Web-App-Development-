import { NotifyUserLoadBusinessesError } from './businesses.actions';
import { SearchQuery } from './../models/search-query';
import { Business } from './../models/business';
import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  withLatestFrom,
  concatMap,
  tap,
  catchError,
} from 'rxjs/operators';
import { MainPageSearch, MainPageListSearch } from './main-page.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class BusinessesEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<{ businesses: Business[]; searchQuery: SearchQuery }>,
    private snackBar: MatSnackBar
  ) {}

  searchBusinesses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainPageSearch),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.pipe(select('searchQuery'))))
      ),
      concatMap(([action, searchQuery]) =>
        this.apiService.SearchBusinesses(searchQuery).pipe(
          map((businessSearchResult) => ({
            type: '[Businesses API] Search Businesses Success',
            payload: businessSearchResult.Businesses,
          })),
          catchError(() =>
            of({ type: '[Businesses API] Search Businesses Error' })
          )
        )
      )
    )
  );

  notifyUserOfError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NotifyUserLoadBusinessesError),
        tap((action) => {
          this.snackBar.open("Sorry... we can't search right now", 'Dismiss', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: ['style-error'],
          });
        })
      ),
    { dispatch: false }
  );
}
