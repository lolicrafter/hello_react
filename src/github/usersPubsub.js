import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'
const url = 'https://api.github.com/search/users?q='


class Search extends Component {
    state = {
        searchName: ''
    }
    // 搜索
    search = () => {
        PubSub.publish('search', {loading: true})
        const {searchRef: {value: searchName}} = this
        // 发送请求
        axios.get(url + searchName).then(
            response => {
                console.log('response😊===', response)
                const {items, total_count} = response.data
                PubSub.publish('search', {items, total_count})
            }
        ).catch(
            error => {
                console.log('error😊===', error)
                PubSub.publish('search', {loading:false, errMessage: '请求出错' + error.message})
            }
        )
    }

    // 输入
    searchRef() {
        console.log('searchRef😊===')
    }

    render() {
        return (
            <div>
                搜索用户名 <input ref={c => this.searchRef = c} type="text"/>
                <button onClick={this.search}>搜索</button>
            </div>
        );
    }
}


class List extends Component {
    state = {
        firstBool: true,
        loading: false,
        users: [],
        total_count: 0
    }
    componentDidMount() {
        PubSub.unsubscribe('search');
        PubSub.subscribe('search', (msg, data) => {
            console.log('search😊===', msg, data)
            const {items, total_count, loading, errMessage} = data
            this.setState({
                firstBool: false,
                loading,
                users: items,
                total_count: total_count,
                errMessage
            })
        })
    }

    render() {
        const {users, loading, errMessage, firstBool} = this.state
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    firstBool ? <h2>请输入关键字进行搜索</h2> :
                        loading ? <h2>loading...</h2> :
                            errMessage ? <h2>{errMessage}</h2> :
                                users.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <a href={item.html_url} target="_blank">
                                                <img src={item.avatar_url} style={{width: 100}} alt=""/>
                                            </a>
                                            <p>{item.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}


class Users extends Component {



    render() {
        return (
            <div>
                <Search />
                <List />
                github users
            </div>
        );
    }
}

export default Users;