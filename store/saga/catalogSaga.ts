import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { BrandsService } from "../../API/brands";
import { ProductsService } from "../../API/products";
import { TypesService } from "../../API/types";
import { Actions, fetchItemsI } from "../../types/catalog";
import { IBrand } from "../../types/IBrand";
import { IItemsReq } from "../../types/IItemsReq";
import { IType } from "../../types/IType";
import { setCatalogItems, setCatalogTitle, setError, setIsLoading } from "../actions/catalogActions";

function* fetchItems(opt: fetchItemsI): any {
   try {
      yield put(setIsLoading(true));

      const res = yield call(() => ProductsService.fetchProducts(opt.payload));
      const title: IType | IBrand = yield call(() => {
         if (opt.payload.type) {
            return TypesService.fetchTypeOne(opt.payload.type)
         }

         if (opt.payload.brand) {
            return BrandsService.fetchBrandOne(opt.payload.brand)
         }
      })

      if (title) yield put(setCatalogTitle(title.name))

      yield put(setCatalogItems(res));

   } catch (err) {
      yield put(setError('Ошибка загрузки'))
   }
}

export function* catalogSaga() {
   yield takeLatest<fetchItemsI>(Actions.FETCH_ITEMS, fetchItems);
}