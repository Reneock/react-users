import { legacy_createStore as createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import usersReducer from "../reducers/usersReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({
  usersReducer: usersReducer,
  authReducer: authReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
let Store = createStore(persistedReducer);
let persistor = persistStore(Store);
//let Store = createStore(reducers);

export {Store, persistor};