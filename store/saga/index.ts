import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { brandsSaga } from './brandsSaga';

export function* rootSaga() {
   yield all([
      authSaga(),
      brandsSaga()
   ])
}