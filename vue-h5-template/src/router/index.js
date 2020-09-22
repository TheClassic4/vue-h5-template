import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('@/views/Home.vue');
const Login = () => import('@/views/Login');
const Demo = () => import('@/views/Demo');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: false,
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      keepAlive: false,
      title: '关于'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
    meta: {
      keepAlive: false,
      title: 'Demo案例'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const createRouter = () =>
  new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
  });
const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 路由拦截 这里放在 src/permission.js
// router.beforeEach((to, from, next) => { })

export default router;
