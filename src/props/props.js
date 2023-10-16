// props练习

// 1.创建一个Person组件，传递一个name属性，属性值为任意字符串
// 2.在Person组件中，输出props中的name属性值
import {Component} from "react";
import PropTypes from "prop-types";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log(' constructor props😊===》', props)
    }
    state = {
        name: '张三',
        sex: '男',
        age: 18
    }
    // 添加propTypes属性，设置属性的类型和是否必填
    static  propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.string,
        speaks: PropTypes.func
    }
    static defaultProps = {
        // name: '小米',
        age: 18,
        sex: '男'
    }
    // 添加speaks方法，点击按钮时，弹出一个对话框，显示组件中props的name和age
    speaks = () => {
        alert(`我是${this.props.name}，今年${this.props.age}岁了`)
        this.setState({
            name: '李四'
        })
    }

    render() {
        // console.log('props😊===》', this.props)
        const {name, sex, age} = this.props
        return (
            <div onClick={this.speaks}>
                <h2>state姓名：{this.state.name}</h2>
                <h2>姓名：{name}</h2>
                <h2>性别：{sex}</h2>
                <h2>年龄：{age}</h2>
            </div>
        )
    }
}

function Person1(props) {
    const {name, sex, age} = props
    return (
        <div>
            <h2>姓名2：{name}</h2>
            <h2>性别：{sex}</h2>
            <h2>年龄：{age}</h2>
        </div>
    )
}

Person1.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    speaks: PropTypes.func
}
Person1.defaultProps = {
    age: 18,
    sex: '男'
}
export default Person