import React from 'react'
import {BrowserRouter, Route, Link,Redirect,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { logout , Login } from './Auth.redux'
import App from "./App";
function erying(){
    return <h2>二营</h2>
}
function qibinglian(){
    return <h2>骑兵连</h2>
}
function four(){
    return <h2>404</h2>
}
class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return <h2>测试组件</h2>
    }
}
@connect(
    state=>state.auth,
    { logout , Login }
)
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const redirectToLogin=<Redirect to='/login'/>
        const match = this.props.match
        const app=(
            <div>
                <h1>独立团</h1>
                {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
                <ul>
                    <li>
                        <Link to={`${match.url}`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}qibinglian`}>骑兵连</Link>
                    </li>
                </ul>
                <Route path='/Dashboard/' exact component={App}></Route>
                <Route path='/Dashboard/erying' component={erying}></Route>
                <Route path='/Dashboard/qibinglian' component={qibinglian}></Route>
            </div>
        )
        return this.props.isAuth ? app:redirectToLogin
    }
}
export default Dashboard
