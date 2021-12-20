import { call, put, takeLatest } from "redux-saga/effects";
import { TypesService } from "../../API/types";
import { Actions } from "../../types/types";
import { setTypes, setError, setIsLoading } from "../actions/typesActions";

export function* fetchTypes(): any {
   try {
      yield put(setIsLoading(true));

      const res = yield call(TypesService.fetchTypes);

      yield put(setTypes(res));
   } catch (err) {
      setError(err as string)
   }
}

export function* typesSaga() {
   yield takeLatest(Actions.FETCH_TYPES, fetchTypes);
}