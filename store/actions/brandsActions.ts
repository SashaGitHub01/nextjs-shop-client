import { Actions, fetchBrandsI, setBrandsI, setErrorI, setIsLoadingI } from "../../types/brands";
import { IBrand } from "../../types/IBrand";


export const setBrands = (brands: IBrand[]): setBrandsI => ({
   type: Actions.SET_BRANDS, payload: brands
})

export const setIsLoading = (bool: boolean): setIsLoadingI => ({
   type: Actions.SET_IS_LOADING, payload: bool
})

export const setError = (err: string): setErrorI => ({
   type: Actions.SET_ERROR, payload: err
})

export const fetchBrands = (): fetchBrandsI => ({
   type: Actions.FETCH_BRANDS,
})

