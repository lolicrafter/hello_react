import React, {Component} from 'react';
// 引入store
import store from '../redux/store'
// 引入actionCreator，专门用于创建action对象
import {increment, decrement, incrementAsync} from '../redux/actions/count_action'

class Index extends Component {

    // componentDidMount() {
    //     // 检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const {value} = this.selectNum
        store.dispatch(increment(value*1))
    }
    decrement = () => {
        const {value} = this.selectNum
        store.dispatch(decrement(value*1))
    }
    incrementOdd = () => {
        const {value} = this.selectNum
        const count = store.getState()
        // 判断是否为奇数
        if(count%2!==0){
            store.dispatch({type:'increment',data:value*1})
        }
    }
    incrementSync = () => {
        const {value} = this.selectNum
        store.dispatch(incrementAsync(value*1,500))
    }
    render() {
        return (
            <div>
                <h1>当前和为：{store.getState()}</h1>
                <select ref={c=>this.selectNum =c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementOdd}>奇数加</button>&nbsp;&nbsp;
                <button onClick={this.incrementSync}>异步加</button>
            </div>
        );
    }
}

export default Index;