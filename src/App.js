import React, { Component } from 'react';
import {Button ,List} from 'antd-mobile';
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'
@connect(
    state=>({num:state}),
    {addGun,removeGun,addGunAsync}
)
class App extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="App">
        <h1>现在有机关枪{this.props.num.counter}把</h1>
        <button onClick={this.props.addGun}>申请机关枪</button>
        <button onClick={this.props.removeGun}>减少机关枪</button>
        <button onClick={this.props.addGunAsync}>拖两天机关枪</button>
      </div>
    );
  }
}
/*const mapStateProps=(state)=>{
    return {num:state}
}
const actionCreators={addGun,removeGun,addGunAsync}
App = connect(mapStateProps,actionCreators)(App)*/
function Componentfun(props){
  return <h2>{props.bost}</h2>
}
class Yiying extends Component{
  constructor(props) {
      super(props)
      this.state = {
          solders: ['虎子', '柱子', '庚子']
      }
      this.addSolder=this.addSolder.bind(this)
  }
  componentWillMount(){
      console.log('组件马上就要加载了')
  }
    componentDidMount(){
        console.log('组件马上加载完毕')
    }
  addSolder(){
    console.log('hello world')
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  render (){
      console.log('组件正在加载')
    return (
      <div>
        <h2>{this.props.self}</h2>
        <Button type="primary" onClick={this.addSolder}>新兵入伍</Button>
        <List renderHeader={()=>'士兵列表' }>
          {this.state.solders.map(v=>{
            return <List.Item key={v}>{v}</List.Item>
          })}
        </List>
      </div>
    )
  }
}
export default App;
