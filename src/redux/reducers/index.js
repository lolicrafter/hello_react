// 汇总reducer

import persons from "./person";
import {combineReducers} from "redux";
import count from "./count_reducer";

const allReducer = combineReducers({
        count,
        persons
    }
)
export default allReducer