//refs练习
import {Component, createRef} from "react";
class Demo extends Component{
    state={
        count: 0
    }
    handleClick=()=>{
        console.log('this😊===》',this)
        // console.log('this😊===》',this.refs.input1?.value)
        // console.log('input1', document.getElementById('input1').value)
        // alert(this.input1.value)
        this.setState({
            count: this.state.count + 1
        })
    }
    // myRef = createRef()
    saveInput1=(c)=>{
        console.log('c😊===》',c)
    }
    blur=()=>{
        alert('失去焦点')
    }
    render(){
        return (
            <div>
                <h2>测试更新dom {this.state.count}</h2>
                input: <input ref={(c)=>{this.input1 = c;console.log('count😊===》',c)}} type="text"  placeholder={'点击按钮提示数据'} />
                <br/>
                input: <input ref={this.saveInput1} type="text"  placeholder={'点击按钮提示数据'} />
                <br/>

                {/*<button ref={'button2'} onClick={this.handleClick}>点击提示左侧的数据</button>*/}
                <button ref={(c)=>{this.button2 = c}} onClick={this.handleClick}>点击提示左侧的数据</button>
                <br/>

                input: <input ref={(c)=>{this.input3 = c}} type="text" onBlur={this.blur} placeholder={'失去焦点提示数据'} />

                {/*<h1>计数器：{this.state.count}</h1>*/}
                {/*<button onClick={this.handleClick}>+1</button>*/}
            </div>
        )
    }
}

export default Demo;