import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
// import qs from 'querystring'
class MyNavLink extends Component {
    render() {
        return (
            <Link {...this.props} />
        );
    }
}


class News extends Component {

    componentDidMount() {
        setTimeout(()=>{
            this.props.history.push('/homes/message/')
        }
        ,2000)
    }

    render() {
        return (
            <div>
                News组件内容
            </div>
        );
    }
}


class MessageDetail extends Component {
    state={
        messageArr:[
            {id:1,title:'message001',content:'我爱你，中国1'},
            {id:2,title:'message002',content:'我爱你，中国2'},
            {id:3,title:'message003',content:'我爱你，中国3'},
        ]
    }
    render() {
        console.log('MessageDetail this.props😊===》',this.props)
        const {messageArr} = this.state
        // 接收params参数
        // const {id} = this.props.match.params
        // 接收search参数
        // const {id} = qs.parse(this.props.location.search.slice(1))
        // 接收state参数
        const {id} = this.props.location.state || {}
        const findResult = messageArr.find((item)=>{
            return item.id === id*1
        })||{}
        return (
            <div>
                111
                <ul>
                    <li>ID:{findResult.id}</li>
                    <li>TITLE:{findResult.title}</li>
                    <li>CONTENT:{findResult.content}</li>
                </ul>
            </div>
        );
    }
}
class Message extends Component {
    state={
        messageArr:[
            {id:1,title:'message001'},
            {id:2,title:'message002'},
            {id:3,title:'message003'},
        ]
    }
    // push跳转
    push = (id)=>{
        console.log('push跳转😊===》',)
        this.props.history.push('/homes/message/detail',{id:id,title:'message00'})
        // this.props.history.push(`/homes/message/detail/${id}/`)
        // this.props.history.push(`/homes/message/detail?id=${id}&title=message00`)


    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                Message 组件内容

                {
                    messageArr.map((item)=>{
                        return (
                            <li key={item.id}>
                                <h3 onClick={()=>this.push(item.id)}>push{item.title}</h3>
                                {/*params传参数*/}
                                {/*<MyNavLink to={`/homes/message/detail/${item.id}/${item.title}`}>{item.title}</MyNavLink>*/}
                                {/*search传参数*/}
                                {/*<MyNavLink to={`/homes/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</MyNavLink>*/}
                                {/*state传参数*/}
                                <MyNavLink replace to={{pathname:'/homes/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</MyNavLink>
                            </li>
                        )
                    }
                    )
                }
                {/*params声明接受参数*/}
                {/*<Route path="/homes/message/detail/:id/:title" component={MessageDetail}/>*/}
                {/* search，state无需声明接受参数*/}
                <Route path="/homes/message/detail" component={MessageDetail}/>

            </div>
        );
    }
}



class HomesNav extends Component {
    // replace跳转
    replace = ()=>{
        this.props.history.push('/homes/message/')
    }
    render() {
        return (
            <div>
                <MyNavLink to="/homes/news">news</MyNavLink>
                <br/>
                <MyNavLink to="/homes/message">message</MyNavLink>
                <h3 onClick={this.replace}>跳转message</h3>
            </div>
        );
    }
}






class Homes extends Component {
    render() {
        // console.log('props😊===》',this.props)
        return (
            <h2>
                我是Home组件的内容
                <HomesNav {...this.props}></HomesNav>
                <br/>
                <Switch>
                    <Route path="/homes/news" component={News}/>
                    <Route path="/homes/message" component={Message}/>
                   < Redirect to="/homes/news" />
                </Switch>
            </h2>
        );
    }
}

export default Homes;