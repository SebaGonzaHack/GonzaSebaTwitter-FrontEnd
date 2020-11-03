import { combineReducer } from "redux";
import twitterReducer from "./twitterReducer";

const rootReducer = combineReducer({ twitterReducer });
