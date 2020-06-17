//查看打出包的体积、分布和chunks入口部分的功能
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  projectName: 'Ac_mp',
  date: '2020-4-1',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  plugins: [
    "@tarojs/plugin-less",
    "@tarojs/plugin-sass"
  ],
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime'
      }
      ]
    ]
  },
  defineConstants: {},
  mini: {
    //自定义webpack插件
    webpackChain(chain, webpack) {
      chain.plugin('bundleAnalyzer').use(new BundleAnalyzer(), []);
      chain.plugin('contextReplacement').use(new webpack.ContextReplacementPlugin(/\/[\\]?locale/, /zh-cn/), []);
      // chain.optimization.splitChunks({
      //   chunks: 'all',
      //   name: 'vendors',
      //   maxInitialRequests: Infinity,
      //   minSize: 0,
      //   cacheGroups: {
      //     common: {
      //       name: !!chain.isBuildPlugin ? 'plugin/common' : 'common',
      //       minSize: 0,
      //       minChunks: 2,
      //       chunks: 'initial',
      //       priority: 1
      //     },
      //     vendors: {
      //       name: !!chain.isBuildPlugin ? 'plugin/vendors' : 'vendors',
      //       minSize: 0,
      //       minChunks: 2,
      //       chunks: 'initial',
      //       priority: 10,
      //       test: (module) => {
      //         // 如果需要自定义配置，PARSE_AST_TYPE 可以从 webpackChain 第三个参数获得
      //         return /[\\/]node_modules[\\/]/.test(module.resource);
      //       }
      //     }
      //   }
      // });
    },
    commonChunks: ['runtime', 'vendors', 'common', 'taro'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
