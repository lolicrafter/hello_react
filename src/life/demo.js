import {Component} from "react";

import './demo.css'
class NewsList extends Component {
    state={
        news: []
    }
    componentDidMount() {
        setInterval(() => {
            const {news} = this.state
            this.setState({news: ['新闻' + (news.length + 1),...news]})
        },1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return this.refs.list.scrollHeight
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        this.refs.list.scrollTop += this.refs.list.scrollHeight - snapshot
    }

    render() {
        return (
            <div>
                <h2>新闻列表</h2>
                <div className={'list'} ref={'list'}>
                    {
                        this.state.news.map((item,index) => <div  className={'news'} key={index}>{item}</div>)
                    }
                </div>
            </div>
        )
    }
}

export default NewsList