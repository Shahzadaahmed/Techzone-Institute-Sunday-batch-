// Note: Main reducer file...!

import { combineReducers } from "redux";

// Importing required reducers...!
import authReducer from "./auth-reducer/auth-reducer";
import crudReducer from "./crud-reducer/crud-reducer";

let rootReducer = combineReducers({
    authStates: authReducer,
    crudStates : crudReducer
});

export default rootReducer;