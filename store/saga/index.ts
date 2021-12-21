import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { brandsSaga } from './brandsSaga';
import { catalogSaga } from './catalogSaga';
import { cartSaga } from './cartSaga';
import { productPageSaga } from './productPageSaga';
import { productsSaga } from './productsSaga';
import { typesSaga } from './typesSaga';

export function* rootSaga() {
   yield all([
      authSaga(),
      brandsSaga(),
      productsSaga(),
      catalogSaga(),
      typesSaga(),
      productPageSaga(),
      cartSaga()
   ])
}