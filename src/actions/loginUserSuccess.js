import * as types from './actionTypes';

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}
