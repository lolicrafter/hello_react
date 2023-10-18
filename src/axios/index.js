import React, {Component} from 'react';
import axios from 'axios';
class Index extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log('成功了', response.data)
            },
            error => {
                console.log('失败了', error)
            }
        )
    }
    getCarData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log('成功了', response.data)
            },
            error => {
                console.log('失败了', error)
            }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点击获取学生资料</button>
                <button onClick={this.getCarData}>点击获取汽车资料</button>
            </div>
        );
    }
}

export default Index;