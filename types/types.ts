import { IType } from "./IType";

export enum Actions {
   SET_TYPES = 'TYPES/SET_TYPES',
   SET_IS_LOADING = 'TYPES/SET_IS_LOADING',
   SET_ERROR = 'TYPES/SET_ERROR',
   FETCH_TYPES = 'TYPES/FETCH_TYPES',
}

export interface IState {
   types: IType[],
   isLoading: boolean,
   error: string | null
}

export interface setTypesI {
   type: Actions.SET_TYPES,
   payload: IType[]
}

export interface setIsLoadingI {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface setErrorI {
   type: Actions.SET_ERROR,
   payload: string
}

export interface fetchTypesI {
   type: Actions.FETCH_TYPES,

}

export type ActionsTypes = setTypesI
   | fetchTypesI
   | setErrorI
   | setIsLoadingI;