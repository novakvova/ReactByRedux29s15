import { combineReducers } from "redux";

import counter from "./reducers/counter";
import games from "./reducers/games";

export default combineReducers({
    counter,
    games
});