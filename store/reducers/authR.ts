import { Actions, ActionTypes, IState } from "../../types/auth";


const initialState: IState = {
   user: undefined,
   isLoading: false,
   error: undefined
}

export const authReducer = (state = initialState, action: ActionTypes): IState => {
   switch (action.type) {
      case Actions.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload
         }

      case Actions.SET_USER:
         return {
            ...state,
            user: action.payload,
            isLoading: false,
            error: undefined
         }

      default:
         return state;
   }
}