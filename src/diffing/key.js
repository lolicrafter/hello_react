// 定义key
/**
 * 建立Person组件,包含name age属性
 */
import {Component} from "react";

/**
 * 1.定义key　
 * 2.添加人员
 * 3.渲染人员
 */
class Person extends Component {
    componentDidMount() {
        // 生成1000个人员,填充到state中
        const persons = [];
        for (let i = 0; i < 4; i++) {
            persons.push({id: i, name: '张三'+i, age: 18+i})
        }
        this.setState({persons})

    }

    state = {
        persons: []
    }
    addPerson = () => {
        const {persons} = this.state;
        const newPerson = {id: persons.length+1, name: '赵六'+(persons.length+1), age: 21};
        this.setState({persons:[newPerson,...persons]})
    }
    //
    render() {
        return (
            <div>
                <button onClick={this.addPerson}>添加人员</button>
                <h1>id</h1>
                {
                    this.state.persons.map((item, index) => {
                            return <p key={item.id}>{item.name}---{item.age}
                            input: <input type="text" />
                            </p>
                        }
                    )
                }
                <br/>
                <h1>index</h1>
                {
                    this.state.persons.map((item, index) => {
                            return <p key={index}>{item.name}---{item.age}
                                input: <input type="text" />
                            </p>
                        }
                    )
                }
            </div>
        )
    }
}
export default Person;