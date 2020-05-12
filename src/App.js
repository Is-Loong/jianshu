import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from '../src/store'
//引入全局的 iconfont 样式
import { GlobalStyle } from './static/iconfont/iconfont.js'
//引入组件
import Header from '../src/common/header'
import Dtail from './pages/detail/loadable.js' //异步加载 detail 组件，但detail／index 中获取地址栏参数要改下
import Home from './pages/home'
import Login from './pages/login'

function App() {
  return (
    <Fragment>
      {/**把store数据提供给包含内的组件 */}
      <Provider store={store}>
        <GlobalStyle /> {/** 使用路由 */}
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Dtail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App
