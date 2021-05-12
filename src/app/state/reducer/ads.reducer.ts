import { AdsActions, Actions_ } from './../action/ads.actions';
import { Ads } from './../../registration/ads/ads.model';


export interface AdsState {
  ads: Ads | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: AdsState = {
  ads: null,
  loading: false,
  loaded: false
};


export const adsReducer: (state: AdsState, action: Actions_) => AdsState = (
   state = initialState,
   action: Actions_
 ) => {
   switch (action.type) {
      case AdsActions.CREATE_ADS:
         return { ...state, loading: true, loaded: false };
      case AdsActions.CREATE_ADS_SUCCESS:
         return {...state, ads: {...state.ads, [action.payload.id]: action.payload } };
      default:
            return state;
   }
}




