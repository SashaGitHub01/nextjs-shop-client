import { IState, Actions, ActionsTypes } from "../../types/catalog";


const initialState: IState = {
   items: [],
   error: null,
   isLoading: false
}

export const catalogReducer = (state = initialState, action: ActionsTypes): IState => {
   switch (action.type) {
      case Actions.SET_ITEMS:
         return {
            ...state,
            isLoading: false,
            error: null,
            items: action.payload
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