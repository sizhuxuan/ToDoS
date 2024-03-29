import React, { Component } from 'react'
//导入任务列表容器组件
import TodoListContainer from './containers/TodoListContainer'
//导入添加任务容器组件
import AddToDoContainer from './containers/AddToDoContainer'
// 导入FooterContainer容器组件
import FooterContainer from './containers/FooterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDoContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    )
  }
}

export default App
