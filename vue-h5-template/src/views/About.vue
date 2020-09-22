<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="default" @click="initData">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <div>{{ title | capitalize }}</div>
    <div>
      <p>svg-icon test:</p>
      <span class="svg-container">
        <svg-icon icon-class="phone" class="test-icon" />
      </span>
    </div>
    <div>vuex state: userName ==> {{ userName }}</div>
  </div>
</template>

<script>
import { GetUserInfo } from '@/api/user.js';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'About',
  data() {
    return {
      title: 'about'
    };
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName
    })
  },
  watch: {},
  created() {},
  methods: {
    // ...mapActions([
    //   // `mapActions` 也支持载荷：
    //   'updateToken',
    //   'updateUserPhone'
    // ]),
    ...mapActions({
      setUserName: 'user/setUserName'
    }),
    initData() {
      let params = {};
      GetUserInfo(params)
        .then(res => {
          console.log('res: ', res);
          this.setUserName('userName');
        })
        .catch(err => {
          console.log('err: ', err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 21px;
}
.svg-container {
  padding: 6px 5px;
  color: green;
  vertical-align: middle;
  width: 60px;
  display: inline-block;
  .test-icon {
    width: 40px;
    height: 46px;
    transform: scale(1.8);
  }
}
</style>
