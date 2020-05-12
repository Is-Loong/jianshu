import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //redux的一个中间件

import reducer from './reducer'

//开启 react devtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

//创建 store  使用 thunk 做异步操作
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store