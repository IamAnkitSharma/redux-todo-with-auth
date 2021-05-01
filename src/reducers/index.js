import { combineReducers } from "redux";
import authReducer from "./auth.js"
import todoReducer from "./todo.js";

const rootReducer = combineReducers({
    auth:authReducer,
    todo:todoReducer
})
export default rootReducer;