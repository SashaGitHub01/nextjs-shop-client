import { IBrand } from "./IBrand";

export enum Actions {
   SET_BRANDS = 'brands/SET_BRANDS',
   SET_IS_LOADING = 'brands/SET_IS_LOADING',
   SET_ERROR = 'brands/SET_ERROR',
   FETCH_BRANDS = 'brands/FETCH_BRANDS',
}

export interface IState {
   brands: IBrand[],
   isLoading: boolean,
   error: string | null
}

export interface setBrandsI {
   type: Actions.SET_BRANDS,
   payload: IBrand[]
}

export interface setIsLoadingI {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface setErrorI {
   type: Actions.SET_ERROR,
   payload: string
}

export interface fetchBrandsI {
   type: Actions.FETCH_BRANDS,

}

export type ActionsTypes = setBrandsI
   | fetchBrandsI
   | setErrorI
   | setIsLoadingI;