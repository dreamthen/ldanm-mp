//查看打出包的体积、分布和chunks入口部分的功能
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  projectName: 'ldanm-mp',
  date: '2022-4-1',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  plugins: [],
  sourceRoot: 'src',
  outputRoot: 'dist',
  defineConstants: {},
  terser: {
    enable: true,
    config: {
      toplevel: true,
      compress: {
        toplevel: true,
        dead_code: true,
        unused: true
      }
    }
  },
  csso: {
    enable: true
  },
  framework: 'react',
  mini: {
    //自定义webpack插件
    webpackChain(chain, webpack) {
      chain.plugin('bundleAnalyzer').use(new BundleAnalyzer(), []);
      chain.plugin('contextReplacement').use(new webpack.ContextReplacementPlugin(/\/[\\]?locale/, /zh-cn/), []);
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
      // pxtransform 配置项，参考尺寸章节
      pxtransform: {
        enable: true,
        config: {}
      },
      // 小程序端样式引用本地资源内联
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
    },
    miniCssExtractPluginOption: {
      filename: '[name].[hash:6].css',
      chunkFileName: '[name].[contenthash:6].css'
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
