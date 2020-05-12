const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  //加了这个，less文件才能生效
  // addLessLoader({
  //   strictMath: true,
  //   noIeCompat: true,
  //   localIdentName: '[local]--[hash:base64:5]', // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  // })
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
      sourceMap: true,
    },
  })
)
