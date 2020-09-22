import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'normalize.css/normalize.css';
import '@/styles/global.scss';

// 引入Vant
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);
// 按需引入
import '@/plugins/vant';

// import '@/utils/JsBridge'; // 根据需要添加 JsBridge
import '@/icons'; // icon
import '@/permission'; // 挂载路由后添加路由拦截器（守卫）

import * as filters from '@/filters'; // global filters

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// IE 兼容
// import '@babel/polyfill'  // 在babel7.4之后会提示@babel/polyfill已经被弃用，推荐用以下方式
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
