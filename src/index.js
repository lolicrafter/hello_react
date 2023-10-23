import store from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 定义一个函数来重新渲染组件
function render() {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}

// 初始渲染
render();

// 使用 store.subscribe 来监听状态变化
store.subscribe(() => {
    // 状态发生变化时重新渲染组件
    render();
});
