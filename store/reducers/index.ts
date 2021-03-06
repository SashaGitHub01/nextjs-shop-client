import { combineReducers } from 'redux';
import { HYDRATE, } from 'next-redux-wrapper';
import { authReducer } from './authR';
import { brandsReducer } from './brandsR';
import { productsReducer } from './productsR';
import { catalogReducer } from './catalogR';
import { typesReducer } from './typesR';
import { productPageReducer } from './productPageR';
import { cartReducer } from './cartR';

const rootReducer = combineReducers({
   auth: authReducer,
   brands: brandsReducer,
   products: productsReducer,
   catalog: catalogReducer,
   types: typesReducer,
   productPage: productPageReducer,
   cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

//@ts-ignore
export const reducer = (state, action) => {
   if (action.type === HYDRATE) {
      const nextState = {
         ...state, // use previous state
         ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
   } else {
      return rootReducer(state, action);
   }
};
