import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tweet from "./tweetReducer";

const rootReducer = combineReducers({ userReducer, tweet });

export default rootReducer;
