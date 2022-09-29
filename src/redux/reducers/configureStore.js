import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

const enhancers = [applyMiddleware(thunk)]

export default function configureStore() {
  return createStore(rootReducer, compose(...enhancers));
}
