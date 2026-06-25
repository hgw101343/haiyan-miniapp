const path = require('path')

const config = {
  projectName: 'food-order-miniapp',
  date: '2026-06-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: { patterns: [], options: {} },
  framework: 'react',
  compiler: 'webpack5',
  cache: { enable: false },
  mini: {
    postcss: {
      pxtransform: { enable: true, config: {} },
      // postcss-url 在真机环境下会导致 options.roots.map is not a function
      // 小程序所有图片都通过 require() 引用，无需 CSS url() 内联，禁用即可
      url: { enable: false },
      cssModules: { enable: false, config: { namingPattern: 'module', generateScopedName: '[name]__[local]___[hash:base64:5]' } }
    },
    /**
     * Webpack Chain 配置
     * 修复 enhanced-resolve 的 options.roots.map is not a function 错误
     * 原因：Taro webpack5 在某些环境下 resolve.modules 被设为非数组值
     */
    webpackChain(chain) {
      chain.resolve.modules
        .clear()
        .add('node_modules')
        .add(path.resolve(__dirname, '..', 'node_modules'))
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: [],
    postcss: { autoprefixer: { enable: true, config: {} }, cssModules: { enable: false } }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
