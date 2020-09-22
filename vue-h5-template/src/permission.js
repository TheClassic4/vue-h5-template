import router from './router';
// import store from './store';
import { getToken } from '@/utils/auth';
import getPageTitle from '@/utils/getPageTitle';
// import { Notify } from 'vant';
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/demo'];

router.beforeEach(async (to, from, next) => {
  // start progress bar
  //   NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title);

  // 在未取到token时根据业务修改，使用示例如下：
  // window.setupWebViewJavascriptBridge(bridge => {
  //   bridge.callHandler('getWLToken', {}, result => {
  //     const token = result.WLToken;
  //     if (!token) {
  //       store.commit('user/SET_TOKEN', '');
  //       setToken('');
  //       bridge.callHandler('reLoginWL', {
  //         closeAll: 1 // 关闭页面
  //       });
  //       return;
  //     }
  //     store.commit('user/SET_TOKEN', token);
  //     setToken(token);
  //     next();
  //   });
  // });

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0;

      // if (hasRoles) {
      //   next();
      // } else {
      //   try {
      //     // get user info
      //     // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
      //     const { roles } = await store.dispatch('user/getInfo');

      //     // generate accessible routes map based on roles
      //     const accessRoutes = await store.dispatch('permission/generateRoutes', roles);

      //     // dynamically add accessible routes
      //     router.addRoutes(accessRoutes);

      //     // hack method to ensure that addRoutes is complete
      //     // set the replace: true, so the navigation will not leave a history record
      //     next({ ...to, replace: true });
      //   } catch (error) {
      //     // remove token and go to login page to re-login
      //     await store.dispatch('user/resetToken');
      //     Notify({ type: 'warning', message: error || 'Has Error' });
      //     next(`/login?redirect=${to.path}`);
      //     //   NProgress.done();
      //   }
      // }

      next();
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      //   NProgress.done()
    }
  }
});

// router.afterEach(() => {
//   // finish progress bar
//   //   NProgress.done();
// });
