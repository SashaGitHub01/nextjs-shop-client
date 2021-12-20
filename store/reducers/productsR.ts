import { Actions, ActionsTypes, IState } from "../../types/products"


const initialState: IState = {
   products: [],
   error: null,
   isLoading: false,
}

export const productsReducer = (state = initialState, action: ActionsTypes): IState => {
   switch (action.type) {
      case Actions.SET_PRODUCTS:
         return {
            ...state,
            isLoading: false,
            error: null,
            products: action.payload
         }

      case Actions.SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         }

      case Actions.SET_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }

      default:
         return state
   }
}