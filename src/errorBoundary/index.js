import React, {Component} from 'react';

class Index extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error)
        return {hasError: error}
    }
    componentDidCatch(error, errorInfo) {
        // 统计页面的错误。发送请求发送到后台去
        console.log('componentDidCatch', error, errorInfo)
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h1>出错了</h1> : <Child/>}
            </div>
        );
    }
}


class Child extends Component {
    state = {
        students: [
            {id: 1, name: '张三'},
            {id: 2, name: '李四'},
            {id: 3, name: '王五'},
        ]
        // students: '123'
    }

    render() {
        return (
            <div>
                {
                    this.state.students.map((item, index) => {
                            return <p key={item.id}>{item.name}</p>
                        }
                    )
                }
                ErrorBoundary
            </div>
        );
    }
}


export default Index;