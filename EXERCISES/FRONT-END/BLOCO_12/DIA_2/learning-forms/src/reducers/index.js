import { combineReducers } from 'redux';
import saveReducer from './saveReducer';

const rootReducer = combineReducers({
  saveReducer,
});

export default rootReducer;
