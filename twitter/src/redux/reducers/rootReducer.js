import { combineReducers } from "redux";
import user from "./userReducer";
import tweet from "./tweetReducer";

const rootReducer = combineReducers({ user, tweet });

export default rootReducer;
