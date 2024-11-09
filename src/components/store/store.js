// store.js
import { createStore, combineReducers } from "redux";
import { cartReducer } from "../reducers/reducers";

const rootReducer = combineReducers({
    cart: cartReducer
});

export const store = createStore(rootReducer);
