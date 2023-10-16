import React, {Component} from 'react';

class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (bool) => {
        // console.log('handleMouse😊===》', bool)
        this.setState({
                mouse: bool
            }
        )
    }
    handleCheck = (id,e) => {
        this.props.itemTodo && this.props.itemTodo(id, e.target.checked)
    }
    // 删除事件
    handleDelete = (id) => {
        console.log('handleDelete😊===》', id)
        this.props.itemDelete && this.props.itemDelete(id)
    }

    render() {
        const {mouse} = this.state;
        let backgroundColor = '#fff';
        if (mouse) {
            backgroundColor = '#ddd';
        }
        const {name, done, id} = this.props;
        return (
            <div style={{backgroundColor: backgroundColor,display:"flex",justifyContent:"center"}} onMouseEnter={() => this.handleMouse(true)}
                onMouseLeave={() => this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={e=>this.handleCheck(id,e)} />
                    <span>{name}</span>
                </label>
                <button style={{display: mouse ? 'block' : 'none'}} onClick={()=>this.handleDelete(id)}>删除</button>
            </div>
        );
    }
}

export default Item;