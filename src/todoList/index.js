import React, {Component} from 'react';
import Header from './header';
import List from './list';
import Footer from "./footer";
import {nanoid} from "nanoid";

class Index extends Component {
    state = {
        todos: [
            {
                id: 1,
                done: true,
                name: '吃饭',
            }, {
                id: 2,
                done: false,
                name: '睡觉',
            }, {
                id: 3,
                done: false,
                name: '打豆豆',
            },
        ]
    }
    headerInput = (value) => {
        console.log('value😊===》',value)
        const {todos} = this.state;
        const newTodos = [...todos];
        newTodos.unshift({
            id: nanoid(),
            done: false,
            name: value,
        })
        this.setState({
            todos: newTodos
        })
    }

    updateTodo = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return {...item, done: done}
            } else {
                return item
            }
        })
        this.setState({
            todos: newTodos
        })
    }
    // 删除事件
    handleDelete = (id) => {
        //confirm('确定删除吗？')
        if(window.confirm('确定删除吗？')) {
            console.log('handleDelete😊===》', id)
            const {todos} = this.state;
            const newTodos = todos.filter((item) => {
                return item.id !== id
            })
            this.setState({
                todos: newTodos
            })
        }
    }
    // 全选
    handleCheckAll = (bool) => {
        // console.log('handleCheckAll😊===》', e.target.checked)
        const {todos} = this.state;
        const newTodos = todos.map((item) => {
            return {...item, done: bool}
        })
        this.setState({
            todos: newTodos
        })
    }
    // 清除已完成
    handleClearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((item) => {
            return !item.done
        })
        this.setState({
            todos: newTodos
        })
    }
    render() {
        return (
            <div>
                <Header headerInput={this.headerInput} />
                <List handleDelete={this.handleDelete} updateTodo={this.updateTodo} todos={this.state.todos}/>
                <Footer todos={this.state.todos} handleCheckAll={this.handleCheckAll} handleClearAllDone={this.handleClearAllDone} />
            </div>
        );
    }
}

export default Index;