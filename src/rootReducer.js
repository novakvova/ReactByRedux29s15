import { combineReducers } from "redux";

import counter from "./reducers/counter";
import games from "./reducers/games";
import flashMessages from "./reducers/flashMessages";
import auth from "./reducers/auth";

export default combineReducers({
    counter,
    games,
    flashMessages,
    auth
});