import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.quest, action){
  switch(action.type) {
    case types.ENTER_GUEST:
      return action.quest;
    default:
      return state;
  }
}
