import {Component} from "react";

class Count extends Component {
    state = {
        count: 0
    };

    addCount=()=> {
        this.setState({
            count: this.state.count + 1
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
        return nextState.count % 2 === 0;
    }
    force=()=>{
        this.forceUpdate();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }

    render() {
        console.log('render😊===》',)
        return (
            <div>
                <p>点击次数：{this.state.count}</p>
                <button onClick={this.addCount}>点击</button>
                <button onClick={this.force}>强制更新</button>
            </div>
        )
    }

}

class Father extends Component {
    state = {
        car: '奔驰'
    }

    render() {
        return (
            <div>
                <p>我是父组件</p>
                <button onClick={() => {
                    this.setState({
                        car: '宝马'
                    })
                }}>换车</button>
                <Son car={this.state.car} />
             </div>
        )
    }
}
class Son extends Component {

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', nextProps, nextContext);
    }
    static getDerivedStateFromProps(nextProps) {
        console.log('getDerivedStateFromProps', nextProps);
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        // 获取当前的滚动高度
        return document.body.scrollTop.toString();
        // return 'snapshot';
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }

    render() {

        return (
            <div style={{'background':'red'}}>
                <p>我是子组件</p>
                <p>我开的车是：{this.props.car}</p>
            </div>
        )
    }
}



export default Father;