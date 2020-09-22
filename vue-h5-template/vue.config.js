const path = require('path');
const resolvePath = dir => path.resolve(__dirname, dir);

const port = process.env.port || process.env.npm_config_port || 3000; // dev port
const defaultSettings = require('./src/settings.js');

const name = defaultSettings.title || 'xxx标题';

// cdn 链接
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  vant: 'vant'
};
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境 (指定版本)
  build: {
    css: ['https://cdn.jsdelivr.net/npm/vant@beta/lib/index.css'],
    js: [
      'https://cdn.jsdelivr.net/npm/vue',
      'https://unpkg.com/vue-router/dist/vue-router.js',
      'https://unpkg.com/vuex',
      'https://unpkg.com/axios/dist/axios.min.js',
      'https://cdn.jsdelivr.net/npm/vant@beta/lib/vant.min.js'
    ]
  }
};

// config detail see https://cli.vuejs.org/config/#vue-config-js
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: false, // process.env.NODE_ENV === 'development',  // 开发模式开启eslint检查
  productionSourceMap: false,
  // requireModuleExtension: true,  // CSS Modules 模块
  pwa: {
    iconPaths: {
      favicon32: 'xh-logo.png',
      favicon16: 'xh-logo.png',
      appleTouchIcon: 'xh-logo.png',
      maskIcon: 'xh-logo.png',
      msTileImage: 'xh-logo.png'
    }
  },
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // '/api': {
      //     target: '<url>',
      //     ws: true,
      //     changeOrigin: true   // 开启跨域反向代理
      // },
      // '/foo': {
      //     target: '<other_url>'
      // },
      [process.env.VUE_APP_BASE_API]: {
        target: `http://47.99.88.195:8081`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '' // 前面加^配出来后就是http://base.hnabc.cn/api/xxx/xxx,不会出现随意规定的app字段
        }
      }
    }
    // after: require("./mock/mock-server.js")
  },
  configureWebpack: config => {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    // resolve: {
    //   alias: {
    //     "@": resolvePath("src")
    //   }
    // }

    // 为生产环境修改配置...
    if (process.env.NODE_ENV === 'production') {
      // externals里的模块不打包
      Object.assign(config, {
        name: name,
        externals: externals
      });
    }
    // 为开发环境修改配置...
    if (process.env.NODE_ENV === 'development') {
      Object.assign(config, {
        name: name
      });
    }
  },
  chainWebpack(config) {
    // config.plugins.delete("preload"); // TODO: need test
    // config.plugins.delete("prefetch"); // TODO: need test

    // alias
    config.resolve.alias.set('@', resolvePath('src'));

    // 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build;
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev;
      }
      return args;
    });

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolvePath('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolvePath('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'));

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: 'chunk-commons',
            test: resolvePath('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          },
          libs: {
            name: 'chunk-libs',
            chunks: 'initial', // only package third parties that are initially dependent
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          }
        }
      });
      config.optimization.runtimeChunk('single');
    });
  }
};
