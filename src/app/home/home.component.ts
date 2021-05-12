import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../state/app-store.module';
import { AddError } from '../state/action/error.action';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'filed';
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new AddError({error: 'message'}));
  }


}
