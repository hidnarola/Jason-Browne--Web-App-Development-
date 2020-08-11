import { createAction, props } from '@ngrx/store';
import { CoordinatesGeography } from '../models/coordinates-geograpy';

export const SearchQueryStringSet = createAction('[SearchQueryString] Set', props<{payload: string}>());
export const SearchLocationStringSet = createAction('[SearchLocationString] Set', props<{payload: string}>());
export const SearchCoordinatesSet = createAction('[SearchCoordinates] Set', props<{payload: CoordinatesGeography}>());
export const SearchClear = createAction('[Search] Clear');
