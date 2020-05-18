import * as reducers from "./ducks";
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers(reducers);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;