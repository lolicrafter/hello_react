// 验证diffing
// 新建Timer组件，显示当前时间

import {Component} from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }
  render() {
    return (
        <div className={'time'}>
            <h1>固定内容</h1>
            <h1>当前时间：{this.state.time}</h1>
        </div>
    );
  }
}
export default Timer;