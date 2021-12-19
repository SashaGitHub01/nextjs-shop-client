import { Actions, IfetchAuth, IfetchLogin, IfetchRegistration, IsetError, IsetIsLoading, IsetUser } from "../../types/auth";
import { ILoginData } from "../../types/ILogin";
import { IRegistrationData } from "../../types/IRegistration";
import { IUser } from "../../types/IUser";

export const setUser = (user: IUser): IsetUser => ({
   type: Actions.SET_USER, payload: user
})

export const setError = (err: string): IsetError => ({
   type: Actions.SET_ERROR, payload: err
})

export const fetchAuth = (): IfetchAuth => ({
   type: Actions.FETCH_AUTH
})

export const fetchLogin = (data: ILoginData): IfetchLogin => ({
   type: Actions.FETCH_LOGIN, payload: data
})

export const fetchRegistration = (data: IRegistrationData): IfetchRegistration => ({
   type: Actions.FETCH_REGISTRATION, payload: data
})

export const setIsLoading = (bool: boolean): IsetIsLoading => ({
   type: Actions.SET_IS_LOADING, payload: bool
})