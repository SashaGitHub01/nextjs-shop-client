import { IUser } from "./IUser";

export const enum Actions {
   SET_USER = 'auth/SET_USER',
   SET_IS_LOADING = 'auth/SET_IS_LOADING',
}

export interface IState {
   user?: IUser,
   error?: string,
   isLoading: boolean
}

export interface setUser {
   type: Actions.SET_USER,
   payload: IUser
}

export interface setIsLoading {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export type ActionTypes = setUser
   | setIsLoading;