import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';
import { effects, reducers } from './index';


@NgModule({
   declarations: [],
   imports: [
      CommonModule,
      EffectsModule.forRoot(effects),
      StoreModule.forRoot(reducers),
      StoreDevtoolsModule.instrument()
   ],
})
export class AppStoreModule { }