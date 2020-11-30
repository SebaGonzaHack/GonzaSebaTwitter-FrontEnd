import { combineReducers } from "redux";
import twitterReducer from "./twitterReducer";
import userReducer from "./userReducer";
import tweet from "./tweetReducer";

const rootReducer = combineReducers({ twitterReducer, userReducer });

const rootReducer = combineReducers({ twitterReducer, tweet });

export default rootReducer;
