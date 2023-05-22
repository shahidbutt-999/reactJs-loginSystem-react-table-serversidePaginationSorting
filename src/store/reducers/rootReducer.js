import { combineReducers } from 'redux';
import authorized from './authorized';
import userTableRedClientSide from './userTableRedClientSide';
import userTableRedUnixFor from './userTableRedUnixFor.js';


const rootReducer = combineReducers({
    userTableRedClientSide: userTableRedClientSide,
    isAuthorize: authorized,
    userTableRedUnixFor: userTableRedUnixFor,
});

export default rootReducer;