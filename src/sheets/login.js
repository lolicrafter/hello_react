// 登录组件
import {Component} from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('this.state😊===》', this.state)
        const {username, password} = this.state;
        console.log(username, password);
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    // 柯里化
    handleForm = () => {
        return (event) => {
            console.log('event😊===》',event)
            const {target} = event;
            const {name, value} = target;
            this.setState({
                [name]: value
            })
        }
    }
    // 非柯里化
    handleForm2 = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <div className="login" onSubmit={this.handleSubmit}>
                <form action="http://atguigu.com">
                    <input onChange={e=>this.handleForm2('username',e.target.value)} type="text" placeholder="用户名" name={'username'}/>
                    <input onChange={this.handleForm('password')} type="password" placeholder="密码" name={'password'}/>
                    <button type="submit">登录</button>
                </form>
            </div>
        );
    }
}

export default Login;