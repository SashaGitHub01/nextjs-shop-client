import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { AuthService } from "../../API/auth";
import { Actions, IfetchLogin, IfetchRegistration } from "../../types/auth";
import { ILoginData } from "../../types/ILogin";
import { setError, setIsLoading, setUser } from "../actions/authActions";


export function* authMe(): any {
   try {
      yield put(setIsLoading(true))

      const user = yield call(AuthService.authMe);

      if (!user) {
         throw Error('Auth error')
      }

      yield put(setUser(user));

   } catch (err: any) {
      console.log(err);
      yield put(setError(err))
   }
}

export function* login(data: IfetchLogin): any {
   try {
      const user = yield call(() => AuthService.login(data.payload));

      if (!user) {
         throw Error('Auth error');
      }

      yield put(setUser(user));

   } catch (err: any) {
      console.log(err);
      yield put(setError(err))
   }
}

export function* register(data: IfetchRegistration): any {
   try {
      const user = yield call(() => AuthService.registrration(data.payload));

      if (!user) {
         throw Error('Reg error');
      }

      yield put(setUser(user));

   } catch (err: any) {
      console.log(err);
      yield put(setError(err))
   }
}

export function* authSaga() {
   yield takeLatest<IfetchLogin>(Actions.FETCH_LOGIN, login);
   yield takeLatest<IfetchRegistration>(Actions.FETCH_REGISTRATION, register);
   yield takeLatest(Actions.FETCH_AUTH, authMe);
}