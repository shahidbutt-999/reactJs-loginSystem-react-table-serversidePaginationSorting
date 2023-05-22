import * as actionTypes from "../actions/actionTypes.js";
import dummyData from "../../data/UserTableData.json";

const initialState = {
    userData:
        [...dummyData],
    pageNumber: 0
}

const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER:
            // if check so no empty user is added
            if (action.newUser)
                return {
                    ...state,
                    userData: [
                        ...state.userData,
                        { ...action.newUser }
                    ]
                }
        case actionTypes.DELETE_USER:
            return {
                ...state,
                userData: state.userData.filter(elm => Number(elm.id) !== (Number(action.userId))),
                pageNumber: action.pageNumber
            }
        default:
            return state;
    }
}

export default authenticate;