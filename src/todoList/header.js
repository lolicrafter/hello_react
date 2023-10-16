import React, {Component} from 'react';
import PropTypes from "prop-types";

class Header extends Component {
    state = {
        inputValue: ''
    }
    handleHeaderInput = (e) => {
        // 回车键触发事件
        if (e.keyCode === 13) {
            // 判断输入框是否为空
            if (e.target.value.trim() === '') {
                alert('输入框不能为空')
                return
            }
            this.props.headerInput(e.target.value)
            // 清空输入框
            e.target.value = ''
        }
    }
    static propTypes = {
        headerInput: PropTypes.func.isRequired,
    }

    render() {
        // console.log('this.props.headerInput😊===》',this.props.headerInput)
        return (
            <div>
                input: <input type="text" placeholder={'请输入待办事项'} onKeyDown={this.handleHeaderInput}/>
            </div>
        );
    }
}

export default Header;