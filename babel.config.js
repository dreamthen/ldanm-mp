// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      // 以下参数为 @babel/preset-env 的参数：
      // https://babeljs.io/docs/en/babel-preset-env
      loose: false,
      modules: false,
      useBuiltIns: false,
      targets: {
        ios: '9',
        android: '5'
      },
      decoratorsLegacy: true
    }]
  ]
}

