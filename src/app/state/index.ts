import { ActionReducerMap } from '@ngrx/store';
// import * as fromRouter from '@ngrx/router-store';
import { AppEffects } from './effect/app.effect';
import {AdsState, adsReducer } from './reducer/ads.reducer';
import { errorReducer, ErrorState } from './reducer/error.reducer';

export const effects = [AppEffects];

export const reducers: ActionReducerMap<AppState> = {
   ads: adsReducer,
  error: errorReducer
};

export interface AppState {
   ads: AdsState;
  error: ErrorState;
}


