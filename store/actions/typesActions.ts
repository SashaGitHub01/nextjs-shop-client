import { Actions, fetchTypesI, setTypesI, setErrorI, setIsLoadingI } from "../../types/types";
import { IType } from "../../types/IType";


export const setTypes = (types: IType[]): setTypesI => ({
   type: Actions.SET_TYPES, payload: types
})

export const setIsLoading = (bool: boolean): setIsLoadingI => ({
   type: Actions.SET_IS_LOADING, payload: bool
})

export const setError = (err: string): setErrorI => ({
   type: Actions.SET_ERROR, payload: err
})

export const fetchTypess = (): fetchTypesI => ({
   type: Actions.FETCH_TYPES,
})

