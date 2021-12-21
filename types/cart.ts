import { ICartItem } from "./ICartItem";

export enum Actions {
   FETCH_CART_ITEMS = 'cart/FETCH_CART_ITEMS',
   SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
   SET_ERROR = 'cart/SET_ERROR',
   SET_IS_LOADING = 'cart/SET_IS_LOADING',
   SET_RESULT = 'cart/SET_RESULT'
}

export interface IState {
   cartItems: ICartItem[],
   error: string | null,
   isLoading: boolean,
   result: number,
}

export interface fetchCartItemsI {
   type: Actions.FETCH_CART_ITEMS,
}

export interface setCartItemsI {
   type: Actions.SET_CART_ITEMS,
   payload: ICartItem[]
}

export interface setIsLoadingI {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface setErrorI {
   type: Actions.SET_ERROR,
   payload: string
}

export interface setResultI {
   type: Actions.SET_RESULT,
   payload: number
}

export type ActionsType = fetchCartItemsI
   | setCartItemsI
   | setIsLoadingI
   | setErrorI
   | setResultI