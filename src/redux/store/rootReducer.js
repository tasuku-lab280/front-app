import {combineReducers} from 'redux';
import messageReducer from '../messages/reducers';

export const rootReducers = combineReducers({
  message: messageReducer,
});

export default rootReducers;
