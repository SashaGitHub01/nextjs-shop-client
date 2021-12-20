import { IState, Actions, ActionsTypes } from "../../types/types";


const initialState: IState = {
   types: [],
   error: null,
   isLoading: false
}

export const typesReducer = (state = initialState, action: ActionsTypes): IState => {
   switch (action.type) {
      case Actions.SET_TYPES:
         return {
            ...state,
            isLoading: false,
            error: null,
            types: action.payload
         }

      case Actions.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         }

      case Actions.SET_ERROR:
         return {
            ...state,
            error: action.payload,
            isLoading: false
         }

      default:
         return state
   }
}