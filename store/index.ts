import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import saga, { Task } from "redux-saga";
import { reducer, RootState } from "./reducers";
import { rootSaga } from "./saga";

// const store = createStore(
//    rootReducer,
//    composeWithDevTools(applyMiddleware(saga()))
// );

export interface SagaStore {
   sagaTask?: Task,
}


const makeStore: MakeStore<Store<RootState>> = (context: Context) => {
   const sagaMiddleware = saga();

   const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
   );

   (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

   return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
