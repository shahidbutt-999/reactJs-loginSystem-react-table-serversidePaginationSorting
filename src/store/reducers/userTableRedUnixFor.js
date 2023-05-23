import * as actionTypes from "../actions/actionTypes.js";

const initialState = {
    userTableData: [],
    total: 10,
    currentPage: 1,
    numberOfPages: 1,
    pageSize: 5,
    itemCountInCurrentPage: 5,
    orderBy: "",

}

const userTableRedUnixFor = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TABLE_DATA:
            console.log("SET_TABLE_DATA IS CALLED from Reducer folder");
            return {
                ...state,
                userTableData: [...action.userTableData]
            };
        case actionTypes.SET_TOTAL:
            console.log("SET_TOTAL is called from Reducer folder");
            return {
                ...state,
                total: action.total,
            };
        case actionTypes.SET_CURRENT_PAGE:
            console.log("SET_PAGENUMBER is called from Reducer folder");
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case actionTypes.SET_NUMBER_OF_PAGES:
            console.log("SET_NUMBER_OF_PAGES is called from Reducer folder");
            return {
                ...state,
                numberOfPages: action.numberOfPages,
            };
        case actionTypes.SET_PAGESIZE:
            console.log("SET_PAGESIZE is called from Reducer folder");
            return {
                ...state,
                pageSize: action.pageSize,
            };
        case actionTypes.SET_ITEM_COUNT_IN_CURRENT_PAGE:
            console.log("SET_ITEM_COUNT_IN_CURRENT_PAGE is called from Reducer folder");
            return {
                ...state,
                itemCountInCurrentPage: action.itemCountInCurrentPage,
            };
        case actionTypes.SET_ORDER_BY:
            console.log("SET_ITEM_COUNT_IN_CURRENT_PAGE is called from Reducer folder");
            return {
                ...state,
                orderBy: action.orderBy,
            };
        case actionTypes.DELETE_USER:
            console.log("delete user");
            return state;
        default:
            return state;
    }
}

export default userTableRedUnixFor;