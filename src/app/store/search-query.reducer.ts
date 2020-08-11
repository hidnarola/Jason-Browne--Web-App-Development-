import { SearchQueryStringSet, SearchLocationStringSet, SearchCoordinatesSet, SearchClear } from './search-query.actions';
import {SearchQuery } from '../models/search-query';
import { createReducer, on } from '@ngrx/store';

export const initialState: SearchQuery = { QueryString: '',  LocationString: '', Coordinates: { Latitude: -1, Longitude: -1 }};

export const SearchQueryReducer = createReducer(initialState,
  on(SearchQueryStringSet, (state, { payload }) => ({ ...state, QueryString: payload })),
  on(SearchLocationStringSet, (state, { payload }) => ({ ...state, LocationString: payload })),
  on(SearchCoordinatesSet, (state, { payload }) => ({ ...state, Coordinates: payload })),
  on(SearchClear, (state, ) => (initialState))
);
