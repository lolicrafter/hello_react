import React, {Component,createContext} from 'react';


const MyContext = createContext({

})


class A extends Component {
    state = {
        name: '张三2'
    }

    render() {
        const {name} = this.state
        return (
            <div>
                <h1>A---{name}</h1>
                {/*<B name={name} />*/}
                <MyContext.Provider value={{name, age: 318}}>
                    <B name={name} />
                </MyContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                <h1>B---{name}</h1>
                <CC name={name}  />
            </div>
        );
    }
}

class C extends Component {
    static contextType = MyContext
    render() {
        console.log('C的实例😊===》',this.context)
         const {age} = this.context
        const {name} = this.props

        return (
            <div>
                <h1>C----{name}--{age}</h1>
            </div>
        );
    }
}

function CC(props) {
    return (
        <div>
            <h1>C1----{props.name}</h1>
            <MyContext.Consumer>
                {
                    value => {
                        console.log('value😊===》',value)
                       return <h1>C1----{value.age}</h1>
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}

export default A;