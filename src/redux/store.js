// redux初始化
import { createStore } from 'redux';
import reducer from './count_reducer';
export default createStore(reducer);
