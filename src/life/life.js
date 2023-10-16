// 生命周期组件
import {Component} from 'react';
import {unmountComponentAtNode} from "react-dom";

// 创建一个组件
class Life extends Component {

    state = {
        opacity: 1,
        shouldDestroy: false
    }
    // 手动销毁组件
    killMyself = () => {
        // 手动销毁组件
        this.setState({
            shouldDestroy: true
        })
    }

    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         let {opacity} = this.state;
    //         opacity -= 0.1;
    //         if (opacity <= 0) {
    //             opacity = 1
    //         }
    //         this.setState({
    //             opacity
    //         })
    //     }, 200)
    // }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log('render😊===》',)
        if(this.state.shouldDestroy) return null
        return (
            <div>
                <h2 style={{opacity: this.state.opacity}}>React学不会怎么办</h2>
                <button onClick={this.killMyself}>不活了</button>
            </div>
        )
    }
}

export default Life;