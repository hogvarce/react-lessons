import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import quest from './userReducer';
import ajaxCallsinProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  courses,
  authors,
  quest,
  ajaxCallsinProgress
});

export default rootReducer;
