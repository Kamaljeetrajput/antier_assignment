import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSaga from "redux-saga";
import { all } from "redux-saga/effects";
// sagas
// import todosSaga from "./Todo/saga";
import userSaga from "./user/user.saga";

// // reducers
// import todos from "./Todo/reducer";
import user from "./user/user.reducer";

const rootReducer = combineReducers({
  user,
});

function* rootSaga() {
  yield all([userSaga()]);
}

const sagaMiddleware = createSaga();

const configureStore = () => {
  const middlewares = [sagaMiddleware];
  // logger, works only in development environments
  // if (process.env.NODE_ENV !== "production") {
  //   middlewares.push();
  // }
  // redux devtool
  const composeEnhancers = compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
