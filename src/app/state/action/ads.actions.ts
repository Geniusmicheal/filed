import { Action } from '@ngrx/store';
import { Ads } from './../../registration/ads/ads.model';

export enum AdsActions {
   LOAD_ADS = "[ADS] Load Ads",
   LOAD_ADS_SUCCESS = "[ADS] Load Ads Success",
   LOAD_ADS_FAIL = "[ADS] Load Ads Fail",
   CREATE_ADS = "[ADS] Create Ads",
   CREATE_ADS_SUCCESS = "[ADS] Create Ads Success",
   CREATE_ADS_FAIL = "[ADS] Create Ads Fail"
}

export class LoadAds implements Action {
   readonly type = AdsActions.LOAD_ADS;
 }
 
 export class LoadAdsSuccess implements Action {
   readonly type = AdsActions.LOAD_ADS_SUCCESS;
 
   constructor(public payload: Ads[]) {}
 }
 
 export class LoadAdsFail implements Action {
   readonly type = AdsActions.LOAD_ADS_FAIL;
 
   constructor(public payload: string) {}
}
 
export class CreateAds implements Action {
   readonly type = AdsActions.CREATE_ADS;
 
   constructor(public payload: Ads) {}
}
 
 export class CreateAdsSuccess implements Action {
   readonly type = AdsActions.CREATE_ADS_SUCCESS;
 
   constructor(public payload: Ads) {}
 }
 
export class CreateAdsFail implements Action {
   readonly type = AdsActions.CREATE_ADS_FAIL;

   constructor(public payload: string) {}
}


export type Actions_ = LoadAds | LoadAdsSuccess | LoadAdsFail | CreateAds | CreateAdsSuccess;