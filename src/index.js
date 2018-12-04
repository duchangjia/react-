// 组件
import Auth from './Auth'
import Dashboard from './Dashboard'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// redux
import {createStore,applyMiddleware,compose} from 'redux';
// import { counter } from './index.redux';
// import { auth } from './Auth.redux';
import reducers from './reducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// router
import {BrowserRouter, Route, Link,Redirect,Switch} from 'react-router-dom'
let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    // redux工具的使用
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/*只渲染命中的第一个Route*/}
                <Route path='/login' component={Auth}></Route>
                <Route path='/Dashboard' component={Dashboard}></Route>
                <Redirect to='/Dashboard'></Redirect>
            </Switch>
            {/*<Redirect to='/four' component={four}></Redirect>*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
