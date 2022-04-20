// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      // 以下参数为 @babel/preset-env 的参数：
      // https://babeljs.io/docs/en/babel-preset-env
      framework: 'react',
      ts: false,
      loose: false,
      //@babel/preset-env modules
      modules: false,
      targets: {
        ios: '9',
        android: '5'
      },
      //useBuiltIns不设置的情况下,不自动引入任何corejs的polyfill兼容处理代码
      //useBuiltIns设置'entry'的情况下,需配合设置corejs,corejs2会根据你的入口引入polyfill将所有的polyfill放置在入口的前置中,corejs3会进行根据你的入口引入对项目中需要的polyfill进行按需加载放置于入口的前置中.
      //useBuiltIns设置'usage'的情况下,无需在入口引入polyfill,引擎会根据你的代码自动按需在每个文件中引入特定polyfill兼容处理代码.
      //@babel/plugin-transform-runtime
      useBuiltIns: false,
      //@babel/plugin-proposal-decorators
      decoratorsLegacy: true
    }]
  ]
}

