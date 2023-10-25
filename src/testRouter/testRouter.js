import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch, Link, Redirect, withRouter} from "react-router-dom";
// import About from "./about";
// import Homes from "./homes";

const Homes = lazy(() => import('./homes'))
const About = lazy(() => import('./about'))


class MyNavLink extends Component {
    render() {
        return (
            <Link {...this.props} />
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



class Loading extends Component {
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:'skyblue',color:'orange'}}>loading...</h1>
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
                <h3 onClick={() => this.props.history.goBack()}>回退</h3>
                <h3 onClick={() => this.props.history.goForward()}>前进</h3>
                <div className="right">
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route path="/homes" component={Homes}/>
                            <Redirect to="/homes"/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default withRouter(TestRouter);