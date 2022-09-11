import { legacy_createStore as createStore } from "redux";
import usersReducer from "../reducers/usersReducer";

let store = createStore(usersReducer);

export default store;