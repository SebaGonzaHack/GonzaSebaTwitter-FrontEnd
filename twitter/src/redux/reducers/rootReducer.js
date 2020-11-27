import { combineReducers } from "redux";
import twitterReducer from "./twitterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ twitterReducer, userReducer });

export default rootReducer;
