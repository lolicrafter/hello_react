import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    state = {
        count: 0
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        setInterval(() => {
                this.setState({
                    count: this.state.count + 1
                })
            }
            , 1000)
    }

    render() {
        return (
            <div>
                <h1>和为：{this.state.count}</h1>
                <br/>
                <button onClick={this.add}>点我加1</button>
            </div>
        );
    }
}

function Index2() {
    // console.log('Index2😊===》',)
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('张三')
    const myRef = React.useRef()
    const showInput = () => {
        alert(myRef.current.value)
    }
    const add = () => {
        // console.log('add😊===》',)
        // setCount(count + 1)
        setCount(count => count + 1)
    }
    const changeName = () => {
        setName('李四')
    }

    React.useEffect(() => {
        console.log('useEffect😊===》', count)

        let timer = setInterval(() => {
                setCount(count => count + 1)
                console.log('interval😊===》',)
            }
            , 1000)
        return () => {
            console.log('组件卸载😊===》',)
            clearInterval(timer)
        }
    }, [])

    // 卸载组件
    const unMount = () => {
      // 卸载root
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))

    }


    return (
        <div>
            <input type="text" ref={myRef}/>
            <br/>
            <button onClick={showInput}>点我提示数据</button>
            <h1>和为：{count}</h1>
            <h2>我的名字是：{name}</h2>
            <br/>
            <button onClick={add}>点我加1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unMount}>点我卸载</button>
        </div>
    );
}

export default Index2;