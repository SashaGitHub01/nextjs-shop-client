import { IItemsReq } from "./IItemsReq";
import { IProduct } from "./IProduct";

export enum Actions {
   SET_ITEMS = 'catalog/SET_ITEMS',
   SET_TITLE = 'catalog/SET_TITLE',
   SET_IS_LOADING = 'catalog/SET_IS_LOADING',
   SET_ERROR = 'catalog/SET_ERROR',
   FETCH_ITEMS = 'catalog/FETCH_ITEMS',
   FETCH_TRANDS = 'catalog/FETCH_TRANDS',
}

export interface IState {
   items: IProduct[],
   title: string,
   isLoading: boolean,
   error: string | null
}

export interface setItemsI {
   type: Actions.SET_ITEMS,
   payload: IProduct[]
}

export interface setTitleI {
   type: Actions.SET_TITLE,
   payload: string
}

export interface setIsLoadingI {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface setErrorI {
   type: Actions.SET_ERROR,
   payload: string
}

export interface fetchItemsI {
   type: Actions.FETCH_ITEMS,
   payload: IItemsReq
}


export type ActionsTypes = setItemsI
   | fetchItemsI
   | setErrorI
   | setIsLoadingI
   | setTitleI