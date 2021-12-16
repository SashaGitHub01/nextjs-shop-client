import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import saga from "redux-saga";
import { reducer, RootState } from "./reducers";

// const store = createStore(
//    rootReducer,
//    composeWithDevTools(applyMiddleware(saga()))
// );

const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(
   reducer,
   composeWithDevTools(applyMiddleware(saga()))
);

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
