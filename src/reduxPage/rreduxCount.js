import React, {Component} from 'react';

class Index extends Component {

    // componentDidMount() {
    //     // 检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const {value} = this.selectNum
        this.props.jia(value*1)
     }
    decrement = () => {
        const {value} = this.selectNum
        this.props.jian(value*1)
     }
    incrementOdd = () => {
        const {value} = this.selectNum
        if(this.props.state % 2 !== 0){
            this.props.jia(value*1)
        }

    }
    incrementSync = () => {
        const {value} = this.selectNum
        this.props.jiaAsync(value*1,500)
     }
    render() {
        console.log('props😊===》',this.props)
        return (
            <div>
                <h1>当前和为：{this.props.state}</h1>
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