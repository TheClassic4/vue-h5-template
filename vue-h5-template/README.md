# vue-h5-template

vue搭建移动端开发,基于vue-cli4 + vant ui + sass + vw适配方案 + axios封装，构建移动端模板脚手架

### 已完成

- 多环境配置
- Sass
- Normalize.css
- Vant UI
- Axios请求封装
- Vuex
- filters过滤器
- vw适配
- CDN优化首屏加载
- 低版本浏览器兼容
- Eslint+Pettier统一开发规范
- svg icon
- JsBridge(根据项目需要)

### 说明

后续项目以此为模板，希望能完善成为一个不错的版本

##### vw适配hack问题

这里移除了 postcss-viewport-units 插件，暂未发现问题(等待后续实践)

看其他文章里说要用 viewport-units-buggyfill

https://juejin.im/entry/5aa09c3351882555602077ca

##### CDN优化首屏加载

在Vue项目中，引入到工程中的所有js、css文件，编译时都会被打包进vendor.js，浏览器在加载该文件之后才能开始显示首屏。若是引入的库众多，那么vendor.js文件体积将会相当的大，影响首开的体验。

解决方法是，将引用的外部js、css文件剥离开来，不编译到vendor.js中，而是用资源的形式引用，这样浏览器可以使用多个线程异步将vendor.js、外部的js等加载下来，达到加速首开的目的。

外部的库文件，可以使用CDN资源，或者别的服务器资源等。

##### 低版本浏览器兼容

(babel兼容)

```
npm install --save core-js regenerator-runtime
```

```
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```

```
presets: [['@vue/cli-plugin-babel/preset', {useBuiltIns: 'usage'}]],
```

##### @babel/polyfill低版本浏览器兼容

(在 babel7.4之后会提示@babel/polyfill已经被弃用)

```
npm install --save @babel/polyfill
```

在main.js中引入:
```
//  IE 兼容
import "@babel/polyfill";
```

webpack集成polyfill，使用useBuiltIns的方法实现按需加载:
```
// babel.config.js
module.exports = {
    presets: [["@vue/cli-plugin-babel/preset", { useBuiltIns: "entry" }]],
    plugins: []
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for test production
```
npm run build:stage
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 参考

- [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)
