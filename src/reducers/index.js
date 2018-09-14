
import { combineReducers } from 'redux';


import chatReducers from './ChatReducer';

const allReducers =  combineReducers({
    chatReducers,
});

export default allReducers;
