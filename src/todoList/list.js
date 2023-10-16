import React, {Component} from 'react';
import Item from './item';
import './list.css';
import PropTypes from "prop-types";
class List extends Component {
    // const {todos} = this.props;
    itemTodo = (id, done) => {
        // console.log('itemTodo😊===》', id)
        // console.log('itemTodo😊===》', done)
        this.props.updateTodo && this.props.updateTodo(id, done)
    }
    itemDelete = (id) => {
        this.props.handleDelete && this.props.handleDelete(id)
    }
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
    }
    render() {
        // console.log('this.props😊===》',this.props)
        const {todos} = this.props;
        return (<div className={'list'}>
            <div>
                {
                    todos.map((item) => {
                        return <Item itemDelete={this.itemDelete} itemTodo={this.itemTodo} key={item.id} {...item}/>
                    })
                }
            </div>
        </div>);
    }
}

export default List;