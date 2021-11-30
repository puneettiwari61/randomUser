import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { testReducer } from "./reducers/testReducer";

const initialstate = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  testReducer,
});

const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
