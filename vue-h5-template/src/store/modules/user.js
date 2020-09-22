import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';
import { Login, Logout } from '@/api/user';

const state = {
  token: getToken() || '',
  userName: '' || 'this is test name of vuex state'
  // userData: JSON.parse(sessionStorage.getItem('userData'))
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER_NAME: (state, username) => {
    state.userName = username;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password, vercode } = userInfo;
    return new Promise((resolve, reject) => {
      Login({
        username: username.trim(),
        password: password,
        vercode: vercode.trim()
      })
        .then(response => {
          const { data } = response;
          if (data.code == 200) {
            commit('SET_TOKEN', data.data.token);
            setToken(data.data.token);
            //sessionStorage.setItem('token', data.data.token)
            resolve(data);
          } else {
            reject(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name);
    sessionStorage.setItem('userName', name);
    // 存储对象时，或者使用 vuex-persistedstate
    // let userData = {
    //   userName: name
    // };
    // sessionStorage.setItem('userData', JSON.stringify(userData));
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      Logout()
        .then(res => {
          //用户登出接口
          if (res.data.code == 200) {
            commit('SET_TOKEN', '');
            commit('SET_USER_NAME', '');
            removeToken();
            resetRouter();
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
