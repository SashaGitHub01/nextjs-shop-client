import {
   fetchCartItemsI, setCartItemsI, setIsLoadingI, setErrorI, setResultI, Actions,
} from '../../types/cart';
import { ICartItem } from '../../types/ICartItem';

export const fetchCartItems = (): fetchCartItemsI => ({
   type: Actions.FETCH_CART_ITEMS,
})

export const setIsLoading = (bool: boolean): setIsLoadingI => ({
   type: Actions.SET_IS_LOADING,
   payload: bool
})

export const setCartItems = (items: ICartItem[]): setCartItemsI => ({
   type: Actions.SET_CART_ITEMS,
   payload: items
})

export const setResult = (val: number): setResultI => ({
   type: Actions.SET_RESULT,
   payload: val
})

export const setError = (err: string): setErrorI => ({
   type: Actions.SET_ERROR,
   payload: err
})