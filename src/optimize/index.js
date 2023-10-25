import React, {Component,PureComponent} from 'react';

class Parent extends PureComponent {

    state = {
        car: '奔驰'
    }
    changeCar = () => {
        this.setState({
                car: '宝马'
            }
        )
        this.setState({})
        console.log('点击了按钮');
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldComponentUpdate===》',nextProps, nextState, nextContext)
    //     return nextState.car !== this.state.car
    // }

    render() {
        console.log('Parent render😊===》')
        const {car} = this.state
        return (
            <div style={{backgroundColor: 'orange'}}>
                <h1>Parent</h1>
                <h2>车名：{car}</h2>
                <br/>
                <button onClick={this.changeCar}>换车</button>
                <Child car={'car'} />
            </div>
        );
    }
}


class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldComponentUpdate===》',nextProps, nextState, nextContext)
    //     return nextProps.car !== this.props.car
    // }
    render() {
        console.log('child render😊===》',)
        const {car} = this.props
        return (
            <div style={{backgroundColor: 'gray'}}>
                <h2>Child</h2>
                <h3>---{car}---</h3>
            </div>
        );
    }
}



export default Parent;