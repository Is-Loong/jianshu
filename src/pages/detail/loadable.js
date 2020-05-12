//异步加载 detail 组件

import React from 'react' //识别 jsx 语法
import Loadable from 'react-loadable'

//异步加载
const LoadableComponent = Loadable({
  loader: () => import('./'), //加载当前目录的组件
  loading() {
    //加载前临时显示的内容
    return <div style={{ background: 'red' }}> 正在加载... </div>
  },
})

export default () => <LoadableComponent />
