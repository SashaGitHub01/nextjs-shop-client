import { IProduct } from "../../types/IProduct";
import { Actions, setProductsI, setErrorI, setIsLoadingI, fetchProductsI, fetchTrandsI } from "../../types/products";


export const setProducts = (prod: IProduct[]): setProductsI => ({
   type: Actions.SET_PRODUCTS, payload: prod
})

export const setIsLoading = (bool: boolean): setIsLoadingI => ({
   type: Actions.SET_IS_LOADING, payload: bool
})

export const setError = (err: string): setErrorI => ({
   type: Actions.SET_ERROR, payload: err
})

export const fetchProducts = (): fetchProductsI => ({
   type: Actions.FETCH_PRODUCTS,
})

export const fetchTrands = (): fetchTrandsI => ({
   type: Actions.FETCH_TRANDS,
})