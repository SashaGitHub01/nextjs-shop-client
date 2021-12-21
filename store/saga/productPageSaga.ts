import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { BrandsService } from "../../API/brands";
import { ProductsService } from "../../API/products";
import { TypesService } from "../../API/types";
import { IBrand } from "../../types/IBrand";
import { IProductFull } from "../../types/IProductFull";
import { IType } from "../../types/IType";
import { Actions, fetchProductI } from "../../types/productPage";
import { setBrand, setIsLoading, setProduct, setType } from "../actions/productPageActions";
import { setError } from "../actions/productsActions";

function* fetchProduct(action: fetchProductI): any {
   try {
      yield put(setIsLoading(true));

      const res: IProductFull = yield call(() => ProductsService.fetchProductOne(action.payload));

      const brand: IBrand = yield call(() => BrandsService.fetchBrandOne(res.brandId));
      yield put(setBrand(brand))

      const type: IType = yield call(() => TypesService.fetchTypeOne(res.typeId));
      yield put(setType(type))

      yield put(setProduct(res))

   } catch (err) {
      yield put(setError('Ошибка загрузки'))
   }
}

export function* productPageSaga() {
   yield takeLatest<fetchProductI>(Actions.FETCH_PRODUCT, fetchProduct)
}