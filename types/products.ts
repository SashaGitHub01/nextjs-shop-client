import { IProduct } from "./IProduct";

export enum Actions {
   SET_PRODUCTS = 'prod/SET_PRODUCTS',
   SET_IS_LOADING = 'prod/SET_IS_LOADING',
   SET_ERROR = 'prod/SET_ERROR',
   FETCH_PRODUCTS = 'prod/FETCH_PRODUCTS',
   FETCH_TRANDS = 'prod/FETCH_TRANDS',
}

export interface IState {
   products: IProduct[],
   isLoading: boolean,
   error: string | null
}

export interface setProductsI {
   type: Actions.SET_PRODUCTS,
   payload: IProduct[]
}

export interface setIsLoadingI {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface setErrorI {
   type: Actions.SET_ERROR,
   payload: string
}

export interface fetchProductsI {
   type: Actions.FETCH_PRODUCTS,
}

export interface fetchTrandsI {
   type: Actions.FETCH_TRANDS,
}

export type ActionsTypes = setProductsI
   | fetchProductsI
   | setErrorI
   | setIsLoadingI
   | fetchTrandsI;