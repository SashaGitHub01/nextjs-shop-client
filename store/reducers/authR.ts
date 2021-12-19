import { Actions, ActionTypes, IState } from "../../types/auth";

const initialState: IState = {
   user: null,
   isLoading: false,
   error: null
}

export const authReducer = (state = initialState, action: ActionTypes): IState => {
   switch (action.type) {
      case Actions.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload
         }

      case Actions.SET_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }

      case Actions.SET_USER:
         return {
            ...state,
            user: action.payload,
            isLoading: false,
            error: null
         }

      default:
         return state;
   }
}