import { createStore } from 'redux'
//导入reducer
import reducers from './reducers'
//导入action
// import { addTodo, toggleTodo} from './actions'
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// store.subscribe(() => {
//   console.log('new state:', store.getState())
// })

// console.log(store.getState())
// //添加任务
// store.dispatch(addTodo("吃饭"))
// store.dispatch(addTodo("睡觉"))

// // //切换任务
// store.dispatch(toggleTodo(1))

export default store
