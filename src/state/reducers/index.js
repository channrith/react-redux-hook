import { combineReducers } from 'redux';
import bankingReducer from './bankingReducer';

const reducers = combineReducers({
  bank: bankingReducer,
});

export default reducers;
