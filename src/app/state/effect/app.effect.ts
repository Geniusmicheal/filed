import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map, tap } from 'rxjs/operators';
// import { Ads } from '../../registration/ads/ads.model';
// import { User } from "./../../registration/user/user.model";
import { AppState } from './../index';
import { ServiceService } from  './../../service/service.service';
import * as fromAds from './../action/ads.actions';
import * as fromError from './../action/error.action';






@Injectable()

export class AppEffects {

   constructor(
      private action$: Actions,
      private store: Store<AppState>,
      private api: ServiceService

      // private router: Router

    ) {}

    @Effect()
    createAds$: Observable<Action> = this.action$.pipe(
      ofType<fromAds.CreateAds>(fromAds.AdsActions.CREATE_ADS),
      tap(() => this.store.dispatch(new fromError.RemoveError())),
      mergeMap(action =>
        this.api.addAds(action.payload).pipe(
          map(idea => new fromAds.CreateAdsSuccess(idea)),
          catchError(err => of(new fromError.AddError(err.error)))
        )
      )
    );


}