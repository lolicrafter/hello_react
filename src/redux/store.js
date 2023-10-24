// redux初始化
import { createStore ,applyMiddleware} from 'redux';
import reducer from './count_reducer';
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
export default createStore(reducer,applyMiddleware(thunk));
