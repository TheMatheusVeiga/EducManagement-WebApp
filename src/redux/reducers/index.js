import { combineReducers } from "redux";
import { testReducer } from "./testReducer";

const reducers = combineReducers({
    allTests : testReducer,
});

export default reducers