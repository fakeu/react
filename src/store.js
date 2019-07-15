import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import chat from "./container/Chat/reducer";

const initialState = {};

const reducers = {
  chat: chat
};

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
