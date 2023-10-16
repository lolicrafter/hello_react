// 创建Weather组件
import React, {Component} from 'react'

class Weather extends Component {

    constructor(props) {
        super();
        this.changeWeather = this.changeWeather.bind(this)
    }
    state = {isHot: true}

    changeWeather=()=> {
        console.log('changeWeather', this) // this指向undefined
        this.setState({
            isHot: !this.state.isHot
        })
    }

    render() {
        const {isHot} = this.state
        return (
            <div onClick={this.changeWeather}>
                <h2>今天天气很{isHot ? '热' : '冷'}</h2>
            </div>
        )
    }
}

export default Weather

class Car {
    constructor(brand, model, color) {
        this.brand = brand
        this.model = model
        this.color = color
    }

    a = 1
}

const car1 = new Car('宝马', 'X6', '黑色')
// console.log(car1)