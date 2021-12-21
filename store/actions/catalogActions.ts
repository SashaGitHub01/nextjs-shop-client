import { IProduct } from "../../types/IProduct";
import {
   Actions, setItemsI, setErrorI, setIsLoadingI, fetchItemsI, setTitleI,
} from "../../types/catalog";
import { IItemsReq } from "../../types/IItemsReq";


export const setCatalogItems = (prod: IProduct[]): setItemsI => ({
   type: Actions.SET_ITEMS, payload: prod
})

export const setCatalogTitle = (title: string): setTitleI => ({
   type: Actions.SET_TITLE, payload: title
})

export const setIsLoading = (bool: boolean): setIsLoadingI => ({
   type: Actions.SET_IS_LOADING, payload: bool
})

export const setError = (err: string): setErrorI => ({
   type: Actions.SET_ERROR, payload: err
})

export const fetchItems = (options: IItemsReq): fetchItemsI => ({
   type: Actions.FETCH_ITEMS, payload: options
})