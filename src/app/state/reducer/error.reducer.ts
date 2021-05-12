import { ErrorActions, Actions_ } from '../action/error.action';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

export const errorReducer: (state: ErrorState, action: Actions_) => ErrorState = (
  state = initialState,
  action: Actions_
) => {
   switch (action.type) {
      case ErrorActions.ADD_ERROR:
         return { ...state, error: action.payload };
      case ErrorActions.REMOVE_ERROR:
         return { ...state, error: null };
      default:
         return state;
   }
};