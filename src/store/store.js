import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/reducers";
import { testMiddleware } from "../middleware/middleware";
import thunk from "redux-thunk";

const storeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(testMiddleware, thunk))
);

export default store;
