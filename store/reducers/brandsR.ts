import { IState, Actions, ActionsTypes } from "../../types/brands";


const initialState: IState = {
   brands: [],
   error: null,
   isLoading: false
}

export const brandsReducer = (state = initialState, action: ActionsTypes): IState => {
   switch (action.type) {
      case Actions.SET_BRANDS:
         return {
            ...state,
            isLoading: false,
            error: null,
            brands: action.payload
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