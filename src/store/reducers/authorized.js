import * as actionTypes from "../actions/actionTypes";
let initialState = {
    isLoggedIn: true
    //to turn 
}

const authorized = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN:
            console.log("login action from reducer", state.isLoggedIn);
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