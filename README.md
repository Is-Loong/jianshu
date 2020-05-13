启动前：npm i

## react 不支持 less ，需要安装并通过 customize-cra 加载 less,

## 安装 "customize-cra": "^1.0.0-alpha.0", 然后创建 config-overrides.js

## 安装 "less-loader": "5.0.0"，"less": "^3.11.1",,

## less-loader 需要是 5.0.0 不然报错，参考 package.json

##------------------------------------------------------

# static/iconfont 文件夹里的图标文件是通过 iconfont.cn 下载

```

项目启动时 demo_index.html 会有警告，可以先把这个文件粘出去
```

## 浏览器打开 demo_index.html 粘贴 Unicode 来显示 icon,使用前先要处理下:

1、iconfont.css 中路径加上 ‘./’ 除了 base64
2、删除 .icon41:before／.iconAa:before ／.iconbi:before
3、改名为 js 文件，引入全局样式声名:
import { injectGlobal } from 'styled-components'
4、最后引入到 app.js

##-----------------------------------------------------

如果每个组件中都使用了 connect 连接 store ，当 store 中的数据更改时，每个组件都会更新，有损性能，所以，每个组件中的 Component 改成 PureComponent,
\*\* 前提是 store 使用的数据是使用的 immutable.js
\*\* 原理主要是通过 shouldComponentUpdate 阻止 render 执行
