import { _, UserActions } from './../action/user.actions';
import { User } from './../../registration/user/user.model';

export interface UserState {
   // user: any | null;
   user:User[];
   loading: boolean;
   loaded: boolean;
}

const initialState: UserState = {
   user : [],
   loading: false,
   loaded:true,

};

export const userReducer: (state: UserState, action: Actions_) => UserState = (
   state = initialState,
   action: Actions_
 ) => {
   switch (action.type) {
      case UserActions.LOAD_USERS:
         return { ...state, loading: true, loaded: false }

      case UserActions.LOAD_USERS_SUCCESS:
         return { ...state, users: action.payload, loading: true, loaded: false }
      default:
         return state;
   }
}