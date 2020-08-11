import { LoadBusinesses, ClearBusinesses, UpdateBusinesses } from 'src/app/store/businesses.actions';
import { createReducer, on } from '@ngrx/store';
import { Statement } from '@angular/compiler';
import { Business } from 'src/app/models/business';

export const initialState = [] as Business[];

export const BusinessesReducer = createReducer(initialState,
  on(LoadBusinesses, (state, { payload }) => payload),
  on(ClearBusinesses, () => initialState),
  on(UpdateBusinesses, (state, { payload }) =>
    {
      const businesses = state.map(business => {
        if (business.ProviderId === payload.ProviderId) {
          return payload;
        }
        else {
          return business;
        }
      });

      return businesses;
  })
);
