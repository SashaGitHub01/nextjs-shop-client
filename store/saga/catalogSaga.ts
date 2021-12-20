import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ProductsService } from "../../API/products";
import { Actions, fetchItemsI } from "../../types/catalog";
import { IItemsReq } from "../../types/IItemsReq";
import { setCatalogItems, setError } from "../actions/catalogActions";

function* fetchItems(opt: fetchItemsI): any {
   try {
      const res = yield call(() => ProductsService.fetchProducts(opt.payload));

      yield put(setCatalogItems(res));

   } catch (err) {
      yield put(setError('Ошибка загрузки'))
   }
}

export function* catalogSaga() {
   yield takeLatest<fetchItemsI>(Actions.FETCH_ITEMS, fetchItems);
}