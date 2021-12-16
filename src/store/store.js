import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./root-saga";
import userReducer from './modules/User/slice';

const sagaMiddleware = createSagaMiddleware();
const combineReducer = combineReducers({
  user: userReducer,

});

const rootReducer = (state, action) => {

  //nếu action mà người thực hiện là logout thì ta gắn state = undefined để reset state lại
  if (action.type === 'login/logoutSaga') {
    state = undefined;
  }
  return combineReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);



export default store;
