import request from '@/utils/myRequest';
import qs from 'qs';

// 登陆接口post传参
export function Login(ops) {
  return request({
    url: '/user/sys/login',
    method: 'post',
    data: {
      userName: ops.username,
      passWord: ops.password
    }
  });
}

// 退出登陆
export function Logout() {
  return request({
    url: '/user/sys/logout',
    method: 'post'
  });
}

// 获取相关信息
export function GetUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    data: qs.stringify(params)
  });
}

// 获取手机验证码
export function getPhoneCode(data) {
  return request({
    url: `/user/code/sendVariCode?userPhone=${data.userPhone}&type=${data.type}`,
    method: 'get',
    data
  });
}
