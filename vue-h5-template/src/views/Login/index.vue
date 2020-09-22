<template>
  <div class="login-wrapper">
    <div class="logo">Vue</div>
    <div class="main-container">
      <van-row>
        <van-col span="3"><svg-icon icon-class="phone" class="label-phone-icon"/></van-col>
        <van-col span="21">
          <van-field v-model="telPhone" @blur="checkTel" type="tel" label="" placeholder="请输入手机号" />
        </van-col>
      </van-row>
      <van-row>
        <van-col span="3"><svg-icon icon-class="code" class="label-code-icon"/></van-col>
        <van-col span="21">
          <van-field
            v-model="code"
            type="number"
            @focus="onCodeFocus"
            maxlength="6"
            center
            left-icon=""
            label=""
            placeholder="请输入验证码"
          >
            <van-button
              slot="button"
              size="small"
              class="code-btn"
              :class="{ 'disabled-style': getCodeBtnDisable }"
              :disabled="getCodeBtnDisable"
              @click="getCode"
              >{{ codeBtnText }}</van-button
            >
          </van-field>
        </van-col>
      </van-row>

      <van-button class="login-btn" @click="toLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Notify } from 'vant';
import { mapState, mapActions } from 'vuex';
import { getPhoneCode, Login } from '@/api/user';

export default {
  name: 'Login',
  data() {
    return {
      telPhone: '',
      code: '',
      codeBtnText: '获取验证码',
      waitTime: 60,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    }),
    getCodeBtnDisable: {
      get: function() {
        if (this.waitTime === 60) {
          if (this.telPhone) {
            return false;
          }
          return true;
        }
        return true;
      },
      set: function() {}
    }
  },
  mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function() {
      history.pushState(null, null, document.URL);
    });
  },
  methods: {
    // ...mapActions([
    //   // `mapActions` 也支持载荷：
    //   'updateToken',
    //   'updateUserPhone'
    // ]),
    ...mapActions({
      updateToken: 'user/updateToken',
      updateUserPhone: 'user/updateUserPhone',
      updateUserData: 'user/updateUserData'
    }),
    checkTel() {
      if (!/^1[3456789]\d{9}$/.test(this.telPhone)) {
        Notify({ type: 'warning', message: '手机号码有误，请重填' });
        this.telPhone = '';
      }
    },
    onCodeFocus() {
      if (this.telPhone === '') {
        Notify({ type: 'warning', message: '请先填写您的手机号码' });
        return;
      }
    },
    getCode() {
      let params = {
        userPhone: this.telPhone,
        type: 1
      };
      if (this.telPhone === '') {
        Notify({ type: 'warning', message: '请先填写您的手机号' });
        return;
      }
      getPhoneCode(params)
        .then(res => {
          if (res.code === 200) {
            Notify({ type: 'success', message: '请注意查收您的验证码' });
            this.getCodeBtnDisable = true;
            this.waitTime--;
            this.codeBtnText = `${this.waitTime}s 后重新获取`;
            let timer = setInterval(() => {
              if (this.waitTime > 1) {
                this.waitTime--;
                this.codeBtnText = `${this.waitTime}s 后重新获取`;
              } else {
                clearInterval(timer);
                this.codeBtnText = '获取验证码';
                this.getCodeBtnDisable = false;
                this.waitTime = 60;
              }
            }, 1000);
          } else {
            Notify({ type: 'warning', message: res.msg });
          }
        })
        .catch(() => {
          Notify({ type: 'danger', message: '获取验证码失败，请稍后重试' });
        });
    },
    toLogin() {
      if (this.telPhone === '' || this.code === '') {
        Notify({ type: 'warning', message: '请先填写您的信息' });
        return;
      }
      let params = {
        userPhone: this.telPhone,
        password: this.code,
        loginType: 1
      };
      Login(params)
        .then(res => {
          if (res.code === 200) {
            Notify({ type: 'success', message: '登录成功' });
            this.updateToken(res.data.token);
            this.updateUserPhone(res.data.userPhone);
            let userData = res.data;
            userData.userHeadPath = res.data.userHeadPath || '';
            this.updateUserData(userData);
            // this.$router.push('/');
            this.$router.push({ path: this.redirect || '/' });
          } else if (res.code === 500001) {
            Notify({ type: 'warning', message: res.msg });
          }
        })
        .catch(() => {
          Notify({ type: 'danger', message: '登录失败，请稍后重试' });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss';

.label-phone-icon {
  width: 12px;
  height: 18px;
  transform: scale(1.8);
  margin-top: 13px;
  margin-left: 20px;
}
.label-code-icon {
  width: 12px;
  height: 18px;
  transform: scale(1.8);
  margin-top: 15px;
  margin-left: 20px;
}
</style>
