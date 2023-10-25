// redux初始化
import {createStore, applyMiddleware} from 'redux';

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension';
// 汇总所有的reducer

import allReducer from "./reducers";
// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)));
