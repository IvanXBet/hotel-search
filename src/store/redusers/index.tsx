import { combineReducers } from "redux";
import { hotelsReducer } from "./search.reduser";

const reducer = combineReducers({
  hotelsReducer,
});

export default reducer;
