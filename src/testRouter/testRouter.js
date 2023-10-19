import React, {Component} from 'react';
import {Route, Switch, Link,NavLink} from "react-router-dom";
import About from "./about";
import Homes from "./homes";


class MyNavLink extends Component {
    render() {
        console.log('this.props😊===》',this.props)
        return (
            <Link {...this.props} activeClassName="activeClass"/>
        );
    }
}

class Navigator extends Component {
    render() {
        return (
            <div>
                <MyNavLink to="/about">about</MyNavLink>
                <br/>
                <MyNavLink to="/homes">homes</MyNavLink>


            </div>
        );
    }
}

class TestRouter extends Component {
    render() {
        return (

            <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="left">
                        <Navigator/>
                    </div>
                    <div className="right">
                        <Route path="/about" component={About}/>
                        <Route path="/homes" component={Homes}/>
                    </div>
            </div>
        );
    }
}

export default TestRouter;