import { createStore, applyMiddleware, compose } from "Redux";
import reducers from "./redurce";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;
