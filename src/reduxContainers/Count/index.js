// 引入count组件
// import CountUI from '../../reduxPage/rreduxCount';
import {Component} from "react";
// 引入redux
// import store from '../../redux/store';
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';
import {increment, decrement, incrementAsync} from '../../redux/actions/count_action';

class CountUI extends Component {

    // componentDidMount() {
    //     // 检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const {value} = this.selectNum
        this.props.increment(value * 1)
    }
    decrement = () => {
        const {value} = this.selectNum
        this.props.decrement(value * 1)
    }
    incrementOdd = () => {
        const {value} = this.selectNum
        if (this.props.state % 2 !== 0) {
            this.props.increment(value * 1)
        }

    }
    incrementSync = () => {
        const {value} = this.selectNum
        this.props.incrementAsync(value * 1, 500)
    }

    state = {num: 0}
    addNum = () => {

        // 对象式的setState
        // this.setState({num: this.state.num + 1}, () => {
        //         console.log('setState回调函数😊===》', this.state.num)
        //     }
        // )
        // 函数式的setState
        this.setState((state, props) => {
            return {num: state.num + 1}
        })
    }
    render() {
        console.log('props😊===》', this.props)
        return (
            <div>
                <h1>Count组件</h1>
                <h3>测试setState: {this.state.num}</h3>
                <br/>
                <button onClick={this.addNum}>点击+1</button>
                <br/>
                <h3>当前和为：{this.props.count}</h3>
                <h3>当前人数为：{this.props.personsNum}</h3>
                <select ref={c => this.selectNum = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;&nbsp;
                <button onClick={this.incrementOdd}>奇数加</button>
                &nbsp;&nbsp;
                <button onClick={this.incrementSync}>异步加</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({count: state.count, personsNum: state.persons.length})
// mapDispatchToProps的一般写法
// const mapDispatchToProps = dispatch => ({
//     add: data => dispatch(createIncrementAction(data)),
//     minus: data => dispatch(createDecrementAction(data)),
//     addAsync: (data, time = 500) => dispatch(createIncrementAsyncAction(data, time))
// })
// mapDispatchToProps的简写
const mapDispatchToProps = {
    increment,
    decrement,
    incrementAsync
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer;
