
import State from "./state/state";
import Person from "./props/props";
import Refs from "./refs/refs";
import Login from "./sheets/login";
import Life from "./life/life2";
import NewsList from "./life/demo";
import Timer from "./diffing";
import TodoList from "./todoList";
import Key from "./diffing/key";
// import Axios from "./axios/index.js";
import Users from "./github/users";
// import UsersPubsub from "./github/usersPubsub";
import TestRouter from "./testRouter/testRouter";
// import Antd from "./antd";
import ReduxPage from "./reduxPage";
// import ReduxCount from "./reduxPage/reduxCount";
import store from "./redux/store";

import ReduxCount from "./reduxContainers/Count";
 const person = {
    name: '张三1',
    // age: 8,
    // sex: '男'
}
setTimeout(() => {
    person.name = '李四'
}, 1000)


export default function home() {
    return (
        <div>
            <ReduxCount />
            {/*<ReduxPage />*/}
            {/*<Antd />*/}
            {/*<TestRouter />*/}
            {/*<UsersPubsub />*/}
            {/*<Users />*/}
            {/*<Axios />*/}
            {/*<TodoList/>*/}
            {/*<Key />*/}
            {/*<Timer/>*/}
            {/*<NewsList />*/}
            {/*<Life />*/}
            {/*<Login />*/}
            {/*<State />*/}
            {/*<Person name={'噫噫噫'} />*/}
            {/*<Person {...person} />*/}
            {/*<Refs />*/}
            <br/>
        </div>
    )
}

