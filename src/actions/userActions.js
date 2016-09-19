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

export function loginUserCheck(token) {
  return dispatch => {
    if (token == 'aaa') {
      loginUserSuccess('aaa');
      return true;
    }
    else
      return false;
  }
}
