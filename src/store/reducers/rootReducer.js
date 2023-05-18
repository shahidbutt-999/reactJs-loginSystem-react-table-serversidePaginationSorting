import { combineReducers } from 'redux';
import authenticate from './authenticate.js';


const rootReducer = combineReducers({
    auth: authenticate
});

export default rootReducer;