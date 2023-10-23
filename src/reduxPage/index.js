import React, {Component} from 'react';




class Index extends Component {
    state={
        count:0
    }
    increment = () => {
        const {value} = this.selectNum
        this.setState(state=>({count:state.count+value*1}))
     }
    decrement = () => {
        const {value} = this.selectNum
        this.setState(state=>({count:state.count-value*1}))
     }
    incrementOdd = () => {
        const {value} = this.selectNum
        // 判断是否为奇数
        if(this.state.count%2!==0){
            this.setState(state=>({count:state.count+value*1}))
        }
     }
    incrementSync = () => {
        const {value} = this.selectNum
        setTimeout(()=>{
            this.setState(state=>({count:state.count+value*1}))
        }
        ,1500)
     }
    render() {
        return (
            <div>
                <h1>当前和为：{this.state.count}</h1>
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