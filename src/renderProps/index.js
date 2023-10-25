import React, {Component} from 'react';

class Parent extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'orange'}}>
                <h1>Parent</h1>
                <A render={(name)=><B name={name} />} />
            </div>
        );
    }
}


class A extends Component {
    state = {
        name: '张三'
    }
    render() {
        return (
            <div style={{backgroundColor: 'blue'}}>
                <h2>A</h2>
                {this.props.render(this.state.name)}
                {/*<B/>*/}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'gray'}}>
                <h2> B</h2>
                {this.props.name}
            </div>
        );
    }
}


export default Parent;