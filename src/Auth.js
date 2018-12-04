import React from 'react'
import {connect} from 'react-redux'
import { Login } from './Auth.redux'
import {Redirect} from 'react-router-dom'
@connect(
    state=>state.auth,
    {Login}
)
class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.isAuth)
        return (
            <div>
                {this.props.isAuth? <Redirect to='/Dashboard/' />:null}
                <h2>你没有权限，需要登入才能看</h2>
                <button onClick={this.props.Login}>登入</button>
            </div>
        )
    }
}
export default Auth
