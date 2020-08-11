import { createAction, props } from '@ngrx/store';
import { Business } from '../models/business';

export const LoadBusinesses = createAction('[Businesses API] Search Businesses Success', props<{payload: Business[]}>());
export const ClearBusinesses = createAction('[Menubar] Clear Businesses');
export const NotifyUserLoadBusinessesError = createAction('[Businesses API] Search Businesses Error');
export const UpdateBusinesses = createAction('[Review Page] Update reviewed business', props<{payload: Business}>());
