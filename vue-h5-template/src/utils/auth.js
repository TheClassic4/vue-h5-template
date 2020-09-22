import Cookies from 'js-cookie';

const TokenKey = 'token';

export function getToken() {
  return Cookies.get(TokenKey);
  //return sessionStorage.getItem('token')
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 0.5 });
  //return sessionStorage.setItem('token',token)
}

export function removeToken() {
  Cookies.remove(TokenKey);
  sessionStorage.removeItem('token');
}
