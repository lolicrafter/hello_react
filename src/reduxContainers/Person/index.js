import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";

class Person extends Component {

    addPerson = () => {
        const {name, age} = this
        const personObj = {id: nanoid(), name: name.value, age: age.value}
        this.props.addPerson({name: name.value, age: age.value})
        name.value = ''
        age.value = ''
        console.log('personObj😊===》', personObj)
    }

    render() {
        console.log('😊===》',)
        return (
            <div>
                <h1>Person组件</h1>
                <h3>求和为：{this.props.count}</h3>
                input: <input type="text" placeholder={'输入名字'} ref={c => this.name = c}/>
                input: <input type="text" placeholder={'输入年龄'} ref={c => this.age = c}/>
                button: <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                                return <li key={p.id}>{p.name}-{p.age}</li>
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons: state.persons, count: state.count}),
    {
        addPerson
    })(Person);