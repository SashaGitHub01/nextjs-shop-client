import { IBrand } from "../../types/IBrand";
import { IProductFull } from "../../types/IProductFull";
import { IType } from "../../types/IType";
import {
   Actions, setErrorI, setIsLoadingI, setBrandI, setProductI, setTypeI, fetchProductI
} from '../../types/productPage';


export const setProduct = (prod: IProductFull): setProductI => ({
   type: Actions.SET_PRODUCT, payload: prod
})

export const setBrand = (brand: IBrand): setBrandI => ({
   type: Actions.SET_BRAND, payload: brand
})

export const setType = (type: IType): setTypeI => ({
   type: Actions.SET_TYPE, payload: type
})

export const setIsLoading = (bool: boolean): setIsLoadingI => ({
   type: Actions.SET_IS_LOADING, payload: bool
})

export const setError = (err: string): setErrorI => ({
   type: Actions.SET_ERROR, payload: err
})

export const fetchProduct = (id: string): fetchProductI => ({
   type: Actions.FETCH_PRODUCT, payload: id
})