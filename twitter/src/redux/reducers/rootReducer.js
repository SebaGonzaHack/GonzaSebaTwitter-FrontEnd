import { combineReducers } from "redux";
import twitterReducer from "./twitterReducer";
<<<<<<< Updated upstream
import userReducer from "./userReducer";

const rootReducer = combineReducers({ twitterReducer, userReducer });
=======
import tweet from "./tweetReducer";

const rootReducer = combineReducers({ twitterReducer, tweet });
>>>>>>> Stashed changes

export default rootReducer;
