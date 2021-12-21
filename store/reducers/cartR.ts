import { IState, Actions, ActionsType } from "../../types/cart"


const initialState: IState = {
   cartItems: [],
   isLoading: false,
   error: null,
   result: 0,
}

export const cartReducer = (state = initialState, action: ActionsType): IState => {
   switch (action.type) {
      case Actions.SET_CART_ITEMS:
         return {
            ...state,
            isLoading: false,
            error: null,
            cartItems: action.payload
         }

      case Actions.SET_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload,
         }

      case Actions.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         }

      case Actions.SET_RESULT:
         return {
            ...state,
            result: action.payload,
         }

      default:
         return state
   }
}