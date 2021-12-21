import { call, put, takeLatest } from "redux-saga/effects";
import { CartService } from "../../API/cart";
import { Actions } from "../../types/cart";
import { ICartItem } from "../../types/ICartItem";
import { setCartItems, setError, setIsLoading, setResult } from "../actions/cartActions";

function* fetchCartItems(): any {
   try {
      yield put(setIsLoading(true));
      const res: ICartItem[] = yield call(CartService.fetchCartItems);

      if (res) {
         let sum = 0;

         res.forEach(({ item }) => {
            sum += Number(item.price)
         })

         yield put(setResult(sum));
      }

      yield put(setCartItems(res));

   } catch (err) {
      yield put(setError('Ошибка загрузки'))
   }
}

export function* cartSaga() {
   yield takeLatest(Actions.FETCH_CART_ITEMS, fetchCartItems);
}