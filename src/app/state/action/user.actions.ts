import { Action } from '@ngrx/store';
// import { User } from './../../registration/user/user.model';

export enum UserActions {
   LOAD_USERS = '[USER] Load user',
   LOAD_USERS_SUCCESS = '[USER] Load users success',
   REGISTER_USER = '[USER] Register User',

}

export class LoadUsers implements Action {
   readonly type = UserActions.LOAD_USERS;
   constructor(public payload: any) {}
}

export class LoadUserSuccess implements Action {
   readonly type = UserActions.LOAD_USERS_SUCCESS;
   constructor(public payload: any) {}
}


export type Actions_ = LoadUsers | LoadUserSuccess;