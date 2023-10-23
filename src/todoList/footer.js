import React, {Component} from 'react';

class Footer extends Component {
    // 全选
    handleCheckAll = (e) => {
        console.log('Footer e😊===》',e.target.checked)
        this.props.handleCheckAll && this.props.handleCheckAll(e.target.checked)
    }
    // 清除已完成
    handleClearAllDone = () => {
        this.props.handleClearAllDone && this.props.handleClearAllDone()
    }
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, item) => {
                return pre + (item.done ? 1 : 0)
            }
            , 0)
        const total = todos.length
        return (
            <div>
                <label >
                    <input type="checkbox" checked={doneCount===todos.length&&total!==0} onChange={this.handleCheckAll} />
                    <span>全选</span>
                </label>
                <span>已完成：{doneCount}</span>
                <span>全部：{total}</span>
                <button onClick={this.handleClearAllDone}>清除已完成</button>
            </div>
        );
    }
}

export default Footer;