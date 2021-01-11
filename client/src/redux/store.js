import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
