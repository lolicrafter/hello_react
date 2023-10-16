import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <label>
                    <input type="checkbox"/>
                    <span>全选</span>
                </label>
                <span>已完成：0</span>
                <span>全部：2</span>
                <button>清除已完成</button>
            </div>
        );
    }
}

export default Footer;