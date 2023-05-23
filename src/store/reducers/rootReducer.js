import { combineReducers } from 'redux';
import authorized from './authorized';
import userTableRedUnixFor from './userTableRedUnixFor.js';


const rootReducer = combineReducers({
    isAuthorize: authorized,
    userTableRedUnixFor: userTableRedUnixFor,
});

export default rootReducer;