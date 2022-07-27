import { createStore } from "redux";
import { reducer } from "./reducer";
import persistedReducer from "./persistReducer";

const store = createStore(persistedReducer);

export default store;