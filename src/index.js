import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//导入store
import store from './store'
//从react-redux导入provider
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
