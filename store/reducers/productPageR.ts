import { Actions, ActionsType, IState } from "../../types/productPage"


const initialState: IState = {
   product: null,
   error: null,
   isLoading: false,
   type: null,
   brand: null,
}

export const productPageReducer = (state = initialState, action: ActionsType): IState => {
   switch (action.type) {
      case Actions.SET_PRODUCT:
         return {
            ...state,
            product: action.payload,
            isLoading: false,
            error: null,
         }

      case Actions.SET_BRAND:
         return {
            ...state,
            brand: action.payload
         }

      case Actions.SET_TYPE:
         return {
            ...state,
            type: action.payload
         }

      case Actions.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload
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
