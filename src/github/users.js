import React, {Component} from 'react';
import axios from "axios";
const url = 'https://api.github.com/search/users?q='


class Search extends Component {
    state = {
        searchName: ''
    }
    // 搜索
    search = () => {
        console.log('search😊===', this.state.searchName)
        // 发送请求
        // 清空输入
        const {searchRef: {value: searchName}} = this
        this.props.search(searchName)

        // 清空this.searchRef的值
        // this.searchRef.value = ''
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
    render() {
        const {users,loading,errMessage,firstBool} = this.props
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
    state = {
        firstBool: true,
        loading: false,
        users: [],
        total_count: 0
    }


    search = (searchName) => {
        // loading
        this.setState({
                loading: true,
                firstBool: false
            }
        )
        // 发送请求
        axios.get(url + searchName).then(
            response => {

                console.log('response😊===', response)
                const {items, total_count} = response.data
                this.setState({
                    users: items,
                    total_count,
                    loading: false
                })
            }
        ).catch(
            error => {
                console.log('error😊===', error)
                this.setState({
                        loading: false,
                        errMessage: '请求出错' + error.message
                    }
                )
            }
        )

        // 清空this.searchRef的值
        // this.searchRef.value = ''
    }

    render() {
        return (
            <div>
                <Search search={this.search}/>
                <List {...this.state} />
                github users
            </div>
        );
    }
}

export default Users;