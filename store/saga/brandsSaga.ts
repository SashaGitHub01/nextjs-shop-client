import { call, put, takeLatest } from "redux-saga/effects";
import { BrandsService } from "../../API/brands";
import { Actions } from "../../types/brands";
import { setBrands, setError, setIsLoading } from "../actions/brandsActions";

export function* fetchBrands(): any {
   try {
      yield put(setIsLoading(true));

      const res = yield call(BrandsService.fetchBrands);

      yield put(setBrands(res));
   } catch (err) {
      setError(err as string)
   }
}

export function* brandsSaga() {
   yield takeLatest(Actions.FETCH_BRANDS, fetchBrands);
}