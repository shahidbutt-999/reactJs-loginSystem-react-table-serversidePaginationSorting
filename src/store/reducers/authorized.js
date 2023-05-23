import * as actionTypes from "../actions/actionTypes";
let initialState = {
    isLoggedIn: false
}

const authorized = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN:
            return {
                isLoggedIn: true
            };
        case actionTypes.LOG_OUT:
            return {
                isLoggedIn: false
            };
        default:
            return state;
    }
}


export default authorized;