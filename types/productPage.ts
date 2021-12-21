import { IBrand } from "./IBrand";
import { IProduct } from "./IProduct";
import { IProductFull } from "./IProductFull";
import { IType } from "./IType";

export enum Actions {
   SET_PRODUCT = 'prpage/SET_PRODUCT',
   FETCH_PRODUCT = 'prpage/FETCH_PRODUCT',
   SET_ERROR = 'prpage/SET_ERROR',
   SET_TYPE = 'prpage/SET_TYPE',
   SET_BRAND = 'prpage/SET_BRAND',
   SET_IS_LOADING = 'prpage/SET_IS_LOADING'
}

export interface IState {
   product: IProductFull | null,
   error: string | null,
   isLoading: boolean,
   type: IType | null,
   brand: IBrand | null
}

export interface setProductI {
   type: Actions.SET_PRODUCT,
   payload: IProductFull
}

export interface setBrandI {
   type: Actions.SET_BRAND,
   payload: IBrand
}

export interface setTypeI {
   type: Actions.SET_TYPE,
   payload: IType
}

export interface setIsLoadingI {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface setErrorI {
   type: Actions.SET_ERROR,
   payload: string
}

export interface fetchProductI {
   type: Actions.FETCH_PRODUCT,
   payload: string
}


export type ActionsType = setProductI
   | setBrandI
   | setTypeI
   | setIsLoadingI
   | setErrorI
   | fetchProductI