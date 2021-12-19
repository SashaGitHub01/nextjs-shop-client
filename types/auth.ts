import { ILoginData } from "./ILogin";
import { IRegistrationData } from "./IRegistration";
import { IUser } from "./IUser";

export const enum Actions {
   SET_USER = 'auth/SET_USER',
   SET_ERROR = 'auth/SET_ERROR',
   SET_IS_LOADING = 'auth/SET_IS_LOADING',
   FETCH_AUTH = 'auth/FETCH_AUTH',
   FETCH_LOGIN = 'auth/FETCH_LOGIN',
   FETCH_REGISTRATION = 'auth/FETCH_REGISTRATION',
}

export interface IState {
   user: IUser | null,
   error: string | null,
   isLoading: boolean
}

export interface IsetUser {
   type: Actions.SET_USER,
   payload: IUser
}

export interface IfetchAuth {
   type: Actions.FETCH_AUTH,
}

export interface IfetchLogin {
   type: Actions.FETCH_LOGIN, payload: ILoginData
}

export interface IfetchRegistration {
   type: Actions.FETCH_REGISTRATION, payload: IRegistrationData
}


export interface IsetIsLoading {
   type: Actions.SET_IS_LOADING,
   payload: boolean
}

export interface IsetError {
   type: Actions.SET_ERROR,
   payload: string
}

export type ActionTypes = IsetUser
   | IsetIsLoading
   | IsetError
   | IfetchAuth
   | IfetchLogin
   | IfetchRegistration;