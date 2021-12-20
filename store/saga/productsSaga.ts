import { call, put, takeLatest } from "redux-saga/effects";
import { ProductsService } from "../../API/products";
import { Actions } from "../../types/products";
import { setError, setProducts } from "../actions/productsActions";

function* fetchProducts(): any {
   try {
      const res = yield call(ProductsService.fetchProducts);

      yield put(setProducts(res));
   }
   catch (err) {
      yield put(setError('Произошла ошибка'))
   }
}

function* fetchTrands(): any {
   try {
      const res = yield call(ProductsService.fetchTrands);

      yield put(setProducts(res));
   }
   catch (err) {
      yield put(setError('Произошла ошибка'))
   }
}

export function* productsSaga() {
   yield takeLatest(Actions.FETCH_PRODUCTS, fetchProducts);
   yield takeLatest(Actions.FETCH_TRANDS, fetchTrands);
}