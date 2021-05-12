import { CreateAds } from './../../state/action/ads.actions';
import { Component, OnInit } from '@angular/core';
// import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ads } from './ads.model';

import { Store } from '@ngrx/store';

import { AppState } from './../../state';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
   ads: FormGroup;
   constructor( private store: Store<AppState>, ) { }

   ngOnInit(): void {
      this.ads = new FormGroup({
         'convert' : new FormControl(null ,Validators.required),
         'budget': new FormControl('Select monthly ad budget',Validators.required)
     });
   }
   onSubmit(){
      const apiValuesData: Ads = {
         adsConvert: this.ads.value.convert, 
         budget: this.ads.value.budget
      };
      this.store.dispatch(new CreateAds(apiValuesData));
   }
}
